import React, { useState } from "react";
import { AppDispatch, RootState } from "../../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, TaskType } from "../../../../redux/slices/tasksSlice.ts";
import { wrapper, top, taskName, taskDescription } from "./Task.css.ts";
import { ListType } from "../../../../redux/slices/listsSlice.ts";
import { addAction } from "../../../../redux/slices/menuSlice.ts";
import Options from "./Options/Options.tsx";

type PropsType = {
    info: TaskType,
    setIsOpen: (isOpen: boolean) => void,
}

const Task: React.FC<PropsType> = ({ info, setIsOpen }) => {
    const { id, name, description, listId } = info;
    const [isVisible, setIsVisible] = useState(false);
    const thisList = useSelector((state: RootState) => state.lists.lists.find((list: ListType) => list.id === listId));
    const boardId = thisList ? thisList.boardId : 0;

    return (
        <div className={wrapper} onClick={() => setIsOpen(true)}>
            <div className={top}>
                <span className={taskName} hidden={isVisible}>{name}</span>
                <Options id={id} name={name} boardId={boardId} isVisible={isVisible} setIsVisible={setIsVisible}/>
            </div>
            <div className={taskDescription}>{description}</div>
        </div>
    );
};

export default Task;