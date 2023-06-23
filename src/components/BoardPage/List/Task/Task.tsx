import React, { useState } from "react";
import { AppDispatch, RootState } from "../../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, editTask, TaskType } from "../../../../redux/slices/tasksSlice.ts";
import { wrapper } from "./Task.css.ts";
import Popup from "../../../Popup/Popup.tsx";
import { ListType } from "../../../../redux/slices/listsSlice.ts";
import { addAction } from "../../../../redux/slices/menuSlice.ts";

type PropsType = {
    info: TaskType,
}

const Task: React.FC<PropsType> = ({ info }) => {
    const { id, name, description, listId } = info;
    const dispatch: AppDispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const thisList = useSelector((state: RootState) => state.lists.lists.find((list: ListType) => list.id === listId));
    const boardId = thisList ? thisList.boardId : 0;

    const handleRename = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
        if (isVisible && newName) {
            dispatch(editTask({ id, name: newName }));
            dispatch(addAction({text: `renamed task "${name}" to "${newName}"`, boardId}));
            setIsVisible(false);
            setNewName("");
        }
    };

    const handleDelete = () => {
        dispatch(deleteTask(id));
        dispatch(addAction({text: `deleted task "${name}"`, boardId}));
    }

    return (
        <div className={wrapper}>
            <Popup boardId={boardId} listId={null} taskId={id} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div onClick={() => setIsOpen(true)}>
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
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Task;