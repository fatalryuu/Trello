import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { addDescription, TaskType } from "../../../../../redux/slices/tasksSlice.ts";
import { addAction } from "../../../../../redux/slices/menuSlice.ts";
import { wrapper, form, closeButton, nameHeader, listHeader, input, submit } from "./DescriptionPopup.css.ts";

type PropsType = {
    name: string,
    list: string,
    initDesc: string | null,
    boardId: number,
    taskId: number,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const DescriptionPopup: React.FC<PropsType> = ({ name, list, initDesc, boardId, taskId, isOpen, setIsOpen }) => {
    const [description, setDescription] = useState(initDesc ? initDesc : "");
    const dispatch: AppDispatch = useDispatch();
    const tasks: Array<TaskType> = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        setDescription(initDesc ? initDesc : "");
    }, [initDesc]);

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setDescription("");
        setIsOpen(false);
    };

    const handleCloseWindow = () => {
        setDescription("");
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (initDesc !== description) {
            dispatch(addDescription({ id: taskId, description }));
            dispatch(addAction({
                text: `added description "${description}" to the "${tasks.find((task: TaskType) => task.id === taskId)?.name}" card`,
                boardId
            }));
            setDescription("");
        }
        setIsOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div hidden={!isOpen} className={wrapper} onClick={handleCloseWindow}>
            <form onSubmit={handleSubmit} className={form} onClick={e => e.stopPropagation()}>
                <button onClick={handleClose} className={closeButton}>X</button>
                <h2 className={nameHeader}>{name}</h2>
                <div className={listHeader}>in list <b>{list}</b></div>
                <label htmlFor="name">Description:</label>
                <br/>
                <input type="text"
                       id="name"
                       value={description}
                       autoComplete="off"
                       onChange={handleChange}
                       className={input}
                />
                <br/>
                <input type="submit" value="Save" className={submit}/>
            </form>
        </div>
    );
};

export default DescriptionPopup;