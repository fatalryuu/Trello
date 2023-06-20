import React, { useState } from "react";
import { AppDispatch } from "../../../../redux/store.ts";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, TaskType } from "../../../../redux/slices/tasksSlice.ts";
import { wrapper } from "./Task.css.ts";
import Popup from "../../../Popup/Popup.tsx";

type PropsType = {
    info: TaskType,
}

const Task: React.FC<PropsType> = ({ info }) => {
    const { id, name, description } = info;
    const dispatch: AppDispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const handleRename = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
        if (isVisible && newName) {
            dispatch(editTask({ id, name: newName }));
            setIsVisible(false);
            setNewName("");
        }
    };
    return (
        <div className={wrapper} onClick={() => setIsOpen(true)}>
            <Popup boardId={null} listId={null} taskId={id} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div>
                {name}
                <br/>
                {description}
            </div>
            <div>
                <button onClick={handleRename}>
                    {isVisible ? "Confirm" : "Rename"}
                </button>
                <input type="text"
                       placeholder="New name..."
                       value={newName}
                       onChange={(e) => setNewName(e.target.value)}
                       hidden={!isVisible}
                />
                <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
            </div>
        </div>
    );
};

export default Task;