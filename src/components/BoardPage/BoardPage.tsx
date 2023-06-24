import React from "react";
import { useParams } from "react-router-dom";
import {
    board as boardStyle,
    nameHeader,
    listContainer,
    wrapper,
} from "./BoardPage.css.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { ListType } from "../../redux/slices/listsSlice.ts";
import { BoardType } from "../../redux/slices/boardsSlice.ts";
import List from "./List/List.tsx";
import SidePane from "../SidePane/SidePane.tsx";
import SmartButton from "./SmartButton/SmartButton.tsx";
import { getFilteredListsSelector } from "../../selectors/selectors.ts";

const BoardPage: React.FC = () => {
    const { name } = useParams();
    const board: BoardType | undefined = useSelector((state: RootState) => state.boards.boards.find((board: BoardType) => board.name === name));
    const boardId: number = board ? board.id : 0;

    const lists: Array<ListType> = useSelector((state: RootState) => getFilteredListsSelector(state, boardId));
    const listsUI: Array<JSX.Element> = lists.map((list: ListType) => <List info={list} key={list.id}/>);

    return (
        <div className={wrapper}>
            <main className={boardStyle}>
                <h2 className={nameHeader}>{name}</h2>
                <div className={listContainer}>
                    {listsUI}
                    <SmartButton boardId={boardId} />
                </div>
            </main>
            <SidePane boardId={boardId}/>
        </div>
    );
};

export default BoardPage;