import React, { useState } from "react";
import Popup from "./Popup/Popup.tsx";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard/BoardCard.tsx";
import { RootState } from "../../redux/store.ts";
import { Board } from "../../redux/slices/boards.ts";

const Boards: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const boards = useSelector((state: RootState) => state.boards.boards);
    const cards = boards.map((b: Board) => <BoardCard name={b.name} key={b.id}/>);

    return (
        <div>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen}/>
            <h2>Boards</h2>
            <button onClick={() => setIsOpen(true)}>Create Board</button>
            {cards}
        </div>
    );
};

export default Boards;