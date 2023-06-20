import React, { useState } from "react";
import { header } from "./Task.css.ts";
import { AppDispatch } from "../../../../redux/store.ts";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, TaskType } from "../../../../redux/slices/tasksSlice.ts";

type PropsType = {
    info: TaskType,
}

const Task: React.FC<PropsType> = ({ info }) => {
    const { id, name } = info;
    const dispatch: AppDispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState("");
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
        <div>
            <header className={header}>
                {name}
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
            </header>
        </div>
    );
};

export default Task;