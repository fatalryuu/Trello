import React, { useState } from "react";
import { RootState } from "../../../../redux/store.ts";
import { useSelector } from "react-redux";
import { TaskType } from "../../../../redux/slices/tasksSlice.ts";
import { wrapper, top, taskName, taskDescription, hidden } from "./Task.css.ts";
import { ListType } from "../../../../redux/slices/listsSlice.ts";
import Options from "./Options/Options.tsx";

type PropsType = {
    info: TaskType,
    setIsOpen: (isOpen: boolean) => void,
    setTaskInfo: (info: TaskType) => void,
}

const Task: React.FC<PropsType> = ({ info, setIsOpen, setTaskInfo }) => {
    const { id, name, description, listId } = info;
    const [isVisible, setIsVisible] = useState(false);
    const thisList = useSelector((state: RootState) => state.lists.lists.find((list: ListType) => list.id === listId));
    const boardId = thisList ? thisList.boardId : 0;

    const handleClick = () => {
        setTaskInfo(info);
        setIsOpen(true);
    }

    return (
        <div className={wrapper} onClick={handleClick}>
            <div className={top}>
                <span className={taskName} hidden={isVisible}>{name}</span>
                <Options id={id} name={name} boardId={boardId} isVisible={isVisible} setIsVisible={setIsVisible}/>
            </div>
            <div className={description ? taskDescription : hidden}>{description}</div>
        </div>
    );
};

export default Task;