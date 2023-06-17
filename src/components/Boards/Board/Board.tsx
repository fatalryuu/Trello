import React from "react";
import { useParams } from "react-router-dom";
import { wrapper } from "./Board.css.ts";

const Board: React.FC = () => {
    const { name } = useParams();

    return (
        <div className={wrapper}>
            <header>
                <h2>{name}</h2>
            </header>

        </div>
    );
};

export default Board;