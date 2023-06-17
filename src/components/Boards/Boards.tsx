import React, { useState } from "react";
import Popup from "./Popup/Popup.tsx";
import { useSelector } from "react-redux";
import BoardCard from "./BoardCard/BoardCard.tsx";

const Boards: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const boards = useSelector(state => state.boards.boards);
    const cards = boards.map(b => <BoardCard name={b.name} key={b.id}/>);

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