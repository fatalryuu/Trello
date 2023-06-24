import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, BoardType } from "../../../redux/slices/boardsSlice.ts";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { addAction } from "../../../redux/slices/menuSlice.ts";
import { wrapper, top, form, close__button, header, input, submit } from "./NewBoardPopup.css.ts";

type PropsType = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const NewBoardPopup: React.FC<PropsType> = ({ isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const dispatch: AppDispatch = useDispatch();
    const boards: Array<BoardType> = useSelector((state: RootState) => state.boards.boards);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setName("");
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!boards.some((board: BoardType) => board.name === name)) {
            const id: number = Math.round(Math.random() * 10000);
            dispatch(addBoard({ id, name }));
            dispatch(addAction({ text: `created this board`, boardId: id }));
        } else {
            return;
        }
        setIsOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //max 16 symbols
        if (name.length < 16 || e.target.value === name.substring(0, name.length - 1)) {
            setName(e.target.value);
        }
    };

    return (
        <div hidden={!isOpen} className={wrapper}>
            <div className={top}>
                <button onClick={() => setIsOpen(false)} className={close__button}>X</button>
                <h2 className={header}>Create board</h2>
            </div>
            <form onSubmit={handleSubmit} className={form}>
                <label htmlFor="name">Board header</label>
                <br/>
                <input
                    ref={inputRef}
                    type="text"
                    id="name"
                    value={name}
                    autoComplete="off"
                    onChange={handleChange}
                    autoFocus={true}
                    required={true}
                    className={input}
                />
                <br/>
                <input type="submit" value="Create" className={submit}/>
            </form>
        </div>
    );
};

export default NewBoardPopup;