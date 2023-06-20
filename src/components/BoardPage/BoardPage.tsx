import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { list__container, wrapper } from "./BoardPage.css.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { ListType } from "../../redux/slices/listsSlice.ts";
import { BoardType } from "../../redux/slices/boardsSlice.ts";
import List from "./List/List.tsx";
import Popup from "../Popup/Popup.tsx";

const BoardPage: React.FC = () => {
    const { name } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const board: BoardType | undefined = useSelector((state: RootState) => state.boards.boards.find((board: BoardType) => board.name === name));
    const boardId: number = board ? board.id : 0;
    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists.filter((list: ListType) => list.boardId === boardId));
    const listsUI: Array<JSX.Element> = lists.map((list: ListType) => <List info={list} key={list.id}/>)

    return (
        <div className={wrapper}>
            <header>
                <h2>{name}</h2>
                <Popup boardId={boardId} listId={null} isOpen={isOpen} setIsOpen={setIsOpen}/>
                <button onClick={() => setIsOpen(true)}>Add List</button>
                <div className={list__container}>
                    {listsUI}
                </div>
            </header>

        </div>
    );
};

export default BoardPage;