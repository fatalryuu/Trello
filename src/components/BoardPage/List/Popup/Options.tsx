import React, { useState } from "react";
import { deleteList, editList, ListType } from "../../../../redux/slices/listsSlice.ts";
import { addAction } from "../../../../redux/slices/menuSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store.ts";
import { button, nameInput, wrapper } from "./Options.css.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

type PropsType = {
    id: number,
    name: string,
    boardId: number,
    isVisible: boolean,
    setIsVisible: (boolean) => void,
}

const Options: React.FC<PropsType> = ({ id, name, boardId, isVisible, setIsVisible }) => {
    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists);
    const [newName, setNewName] = useState("");
    const dispatch: AppDispatch = useDispatch();

    const handleRename = () => {
        if (!isVisible) {
            setIsVisible(true);
            setNewName(name);
        }
        if (isVisible && newName && newName.length <= 16) {
            if (!lists.some((list: ListType) => list.name === newName && list.boardId === boardId && name !== newName)) {
                dispatch(editList({ id, name: newName }));
                dispatch(addAction({ text: `renamed list "${name}" to "${newName}"`, boardId }));
                setIsVisible(false);
                setNewName("");
            }
        }
    };

    const handleDelete = () => {
        dispatch(deleteList(id));
        dispatch(addAction({ text: `deleted list "${name}"`, boardId }));
    };

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