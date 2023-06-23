import React, { useState } from "react";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard/BoardCard.tsx";
import { RootState } from "../../redux/store.ts";
import { BoardType } from "../../redux/slices/boardsSlice.ts";
import { wrapper, trello__header, boards__header, boards as boardsStyle, button, cards as cardsStyle } from "./BoardsPage.css.ts";
import NewBoardPopup from "./Popup/NewBoardPopup.tsx";

const BoardsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const boards: Array<BoardType> = useSelector((state: RootState) => state.boards.boards);
    const cards: Array<JSX.Element> = boards.map((board: BoardType) => <BoardCard info={board} key={board.id}/>);

    return (
        <div className={wrapper}>
            <h1 className={trello__header}>Trello</h1>
            <div className={boardsStyle}>
                <h2 className={boards__header}>Boards</h2>
                <NewBoardPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
                <div className={cardsStyle}>
                    <button onClick={() => setIsOpen(true)} className={button}>Create Board</button>
                    {cards}
                </div>
            </div>
        </div>
    );
};

export default BoardsPage;