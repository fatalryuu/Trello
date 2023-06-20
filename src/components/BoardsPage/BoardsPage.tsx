import React, { useState } from "react";
import Popup from "../Popup/Popup.tsx";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard/BoardCard.tsx";
import { RootState } from "../../redux/store.ts";
import { BoardType } from "../../redux/slices/boardsSlice.ts";

const BoardsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const boards: Array<BoardType> = useSelector((state: RootState) => state.boards.boards);
    const cards: Array<JSX.Element> = boards.map((board: BoardType) => <BoardCard info={board} key={board.id}/>);

    return (
        <div>
            <Popup boardId={null} listId={null} taskId={null} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <h2>Boards</h2>
            <button onClick={() => setIsOpen(true)}>Create Board</button>
            {cards}
        </div>
    );
};

export default BoardsPage;