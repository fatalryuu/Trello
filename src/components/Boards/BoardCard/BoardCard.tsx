import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { Board, deleteBoard, editBoard } from "../../../redux/slices/boardsSlice.ts";

type PropsType = {
    id: number,
    name: string,
}

const BoardCard: React.FC<PropsType> = ({id, name}) => {
    const dispatch: AppDispatch = useDispatch();
    const boards: Array<Board> = useSelector((state: RootState) => state.boards.boards);
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState("");

    const handleRename = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
        if (isVisible && newName) {
            if (!boards.some((board: Board) => board.name === newName)) {
                dispatch(editBoard({id, name: newName}));
                setIsVisible(false);
                setNewName("");
            }
        }
    }

    return (
        <div>
            <NavLink to={name}>
                {name}
            </NavLink>
            <button onClick={handleRename}>
                {isVisible ? "Confirm" : "Rename"}
            </button>
            <input type="text"
                   placeholder="New name..."
                   value={newName}
                   onChange={(e) => setNewName(e.target.value)}
                   hidden={!isVisible}
            />
            <button onClick={() => dispatch(deleteBoard({id}))}>Delete</button>
        </div>
    );
};

export default BoardCard;