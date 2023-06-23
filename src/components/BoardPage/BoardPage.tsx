import React from "react";
import { useParams } from "react-router-dom";
import {
    board as boardStyle,
    nameHeader,
    listContainer,
    wrapper,
} from "./BoardPage.css.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { ListType } from "../../redux/slices/listsSlice.ts";
import { BoardType } from "../../redux/slices/boardsSlice.ts";
import List from "./List/List.tsx";
import SidePane from "../SidePane/SidePane.tsx";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { moveTask } from "../../redux/slices/tasksSlice.ts";
import SmartButton from "./SmartButton/SmartButton.tsx";

const BoardPage: React.FC = () => {
    const { name } = useParams();
    const board: BoardType | undefined = useSelector((state: RootState) => state.boards.boards.find((board: BoardType) => board.name === name));
    const boardId: number = board ? board.id : 0;

    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists.filter((list: ListType) => list.boardId === boardId));
    const listsUI: Array<JSX.Element> = lists.map((list: ListType) => <List info={list} key={list.id}/>);

    const dispatch: AppDispatch = useDispatch();

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const sourceListId = result.source.droppableId;
        const destinationListId = result.destination.droppableId;

        if (sourceListId !== destinationListId) {
            dispatch(moveTask({ id: +result.draggableId, listId: +destinationListId }));
        }
    };

    return (
        <div className={wrapper}>
            <main className={boardStyle}>
                <h2 className={nameHeader}>{name}</h2>
                {/*<DragDropContext onDragEnd={handleOnDragEnd}>*/}
                <div className={listContainer}>
                    {listsUI}
                    <SmartButton boardId={boardId} />
                </div>
                {/*</DragDropContext>*/}
            </main>
            <SidePane boardId={boardId}/>
        </div>
    );
};

export default BoardPage;