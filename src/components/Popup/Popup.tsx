import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, BoardType } from "../../redux/slices/boardsSlice.ts";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { addList, ListType } from "../../redux/slices/listsSlice.ts";

type PropsType = {
    boardId: number | null,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Popup: React.FC<PropsType> = ({ boardId, isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const dispatch: AppDispatch = useDispatch();
    const boards: Array<BoardType> = useSelector((state: RootState) => state.boards.boards);
    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists);

    useEffect(() => {
        setName("");
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!boardId) {
            if (!boards.some((board: BoardType) => board.name === name)) {
                dispatch(addBoard(name));
            } else {
                return;
            }
        } else {
            if (!lists.some((list: ListType) => list.name === name)) {
                dispatch(addList({ name, boardId }));
            } else {
                return;
            }
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