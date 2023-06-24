import React, { useState } from "react";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard/BoardCard.tsx";
import { BoardType } from "../../redux/slices/boardsSlice.ts";
import { wrapper, trelloHeader, boardsHeader, boards as boardsStyle, button, cards as cardsStyle } from "./BoardsPage.css.ts";
import NewBoardPopup from "./Popup/NewBoardPopup.tsx";
import { getBoardsSelector } from "../../selectors/selectors.ts";

const BoardsPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const boards: Array<BoardType> = useSelector(getBoardsSelector);
    const cards: Array<JSX.Element> = boards.map((board: BoardType) => <BoardCard info={board} key={board.id}/>);

    return (
        <div className={wrapper}>
            <h1 className={trelloHeader}>Trello</h1>
            <div className={boardsStyle}>
                <h2 className={boardsHeader}>Boards</h2>
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