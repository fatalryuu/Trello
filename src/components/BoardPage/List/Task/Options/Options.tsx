import React, { useState } from "react";
import { addAction } from "../../../../../redux/slices/menuSlice.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../redux/store.ts";
import { button, nameInput, wrapper } from "./Options.css.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { deleteTask, editTask } from "../../../../../redux/slices/tasksSlice.ts";

type PropsType = {
    id: number,
    name: string,
    boardId: number,
    isVisible: boolean,
    setIsVisible: (isVisible: boolean) => void,
}

const Options: React.FC<PropsType> = ({ id, name, boardId, isVisible, setIsVisible }) => {
    const [newName, setNewName] = useState("");
    const dispatch: AppDispatch = useDispatch();

    const handleRename = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!isVisible) {
            setIsVisible(true);
            setNewName(name);
        }
        if (isVisible && newName && newName.length <= 16) {
            dispatch(editTask({ id, name: newName }));
            dispatch(addAction({text: `renamed task "${name}" to "${newName}"`, boardId}));
            setIsVisible(false);
            setNewName("");
        }
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(deleteTask(id));
        dispatch(addAction({text: `deleted task "${name}"`, boardId}));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //max 16 symbols
        if (newName.length < 16 || e.target.value === newName.substring(0, newName.length - 1) || e.target.value === "") {
            setNewName(e.target.value)
        }
    }

    return (
        <div className={wrapper}>
            <input type="text"
                   placeholder="New name"
                   value={newName}
                   onChange={handleChange}
                   onClick={e => e.stopPropagation()}
                   hidden={!isVisible}
                   className={nameInput}
                   autoFocus={true}
            />
            <div>
                <button onClick={handleRename} className={button}>
                    {isVisible ? <CheckIcon style={{ fontSize: "medium", color: "black"}}/> :
                        <EditIcon style={{ fontSize: "medium", color: "black" }}/>}
                </button>
                <button onClick={handleDelete} className={button}><DeleteIcon
                    style={{ fontSize: "medium", color: "black" }}/></button>
            </div>
        </div>
    );
};

export default Options;