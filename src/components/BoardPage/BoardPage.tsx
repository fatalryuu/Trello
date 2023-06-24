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
import SmartButton from "./SmartButton/SmartButton.tsx";
import { geAllTasksSelector, getFilteredListsSelector } from "../../selectors/selectors.ts";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { moveTask, TaskType, updateTasks } from "../../redux/slices/tasksSlice.ts";
import { addAction } from "../../redux/slices/menuSlice.ts";

const BoardPage: React.FC = () => {
    const { name } = useParams();
    const board: BoardType | undefined = useSelector((state: RootState) => state.boards.boards.find((board: BoardType) => board.name === name));
    const boardId: number = board ? board.id : 0;

    const lists: Array<ListType> = useSelector((state: RootState) => getFilteredListsSelector(state, boardId));
    const tasks: Array<TaskType> = useSelector(geAllTasksSelector);

    const dispatch: AppDispatch = useDispatch();

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceList = lists.find(l => l.id.toString() === source.droppableId);
            const destList = lists.find(l => l.id.toString() === destination.droppableId);
            const sourceItems = tasks.filter(t => t.listId === sourceList?.id);
            const destItems = tasks.filter(t => t.listId === destList?.id);
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);

            dispatch(moveTask({listId: destList ? destList.id : 0, tasks: destItems}));
            dispatch(addAction({ text: `moved task "${removed.name}"`, boardId }));
        } else {
            const list = lists.find(l => l.id.toString() === source.droppableId);
            const copiedItems = tasks.filter(t => t.listId === list?.id);
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);

            dispatch(updateTasks(copiedItems));
            dispatch(addAction({ text: `moved task "${removed.name}"`, boardId }));
        }
    };

    return (
        <div className={wrapper}>
            <main className={boardStyle}>
                <h2 className={nameHeader}>{name}</h2>
                <div className={listContainer}>
                    <DragDropContext onDragEnd={result => onDragEnd(result)}>
                        {lists.map((list: ListType) => <List info={list} key={list.id}/>)}
                    </DragDropContext>
                    <SmartButton boardId={boardId} />
                </div>
            </main>
            <SidePane boardId={boardId}/>
        </div>
    );
};

export default BoardPage;