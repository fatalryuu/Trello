import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/slices/boardsSlice.ts";
import { AppDispatch } from "../../redux/store.ts";
import { addList } from "../../redux/slices/listsSlice.ts";

type PropsType = {
    boardId: number | null,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Popup: React.FC<PropsType> = ({ boardId, isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        setName("");
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!boardId) {
            dispatch(addBoard(name));
        } else {
            dispatch(addList({ name, boardId }));
        }
        setIsOpen(false);
    };

    return (
        <div hidden={!isOpen}>
            <button onClick={() => setIsOpen(false)}>X</button>
            <h2>{boardId ? "Create List" : "Create board"}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <br/>
                <input type="text" id="name" value={name}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <br/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
};

export default Popup;