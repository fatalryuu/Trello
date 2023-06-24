import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { BoardType, deleteBoard, editBoard } from "../../../redux/slices/boardsSlice.ts";
import { addAction } from "../../../redux/slices/menuSlice.ts";
import { wrapper, name as nameStyle, button, nameInput } from "./BoardCard.css.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

type PropsType = {
    info: BoardType,
}

const BoardCard: React.FC<PropsType> = ({ info }) => {
    const { id, name } = info;
    const dispatch: AppDispatch = useDispatch();
    const boards: Array<BoardType> = useSelector((state: RootState) => state.boards.boards);
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(name);
    }

    const handleRename = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!isVisible) {
            setIsVisible(true);
            setNewName(name);
        }
        if (isVisible && newName && newName.length <= 16) {
            if (!boards.some((board: BoardType) => board.name === newName && name !== newName)) {
                if (name !== newName) {
                    dispatch(editBoard({ id, name: newName }));
                    dispatch(addAction({ text: `renamed this board from "${name}" to "${newName}"`, boardId: id }));
                }
                setIsVisible(false);
                setNewName("");
            }
        }
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(deleteBoard(id));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //max 16 symbols
        if (newName.length < 16 || e.target.value === newName.substring(0, newName.length - 1) || e.target.value === "") {
            setNewName(e.target.value)
        }
    }

    return (
        <div className={wrapper} onClick={handleClick}>
            {!isVisible ?
                <span className={nameStyle}>
                    {name}
                </span> :
                null
            }
            <input type="text"
                   placeholder="New name"
                   value={newName}
                   onChange={handleChange}
                   onClick={(e) => e.stopPropagation()}
                   hidden={!isVisible}
                   className={nameInput}
                   autoFocus={true}
            />
            <div>
                <button onClick={handleRename} className={button}>
                    {isVisible ? <CheckIcon style={{ fontSize: "medium", color: "white"}}/> :
                        <EditIcon style={{ fontSize: "medium", color: "white" }}/>}
                </button>
                <button onClick={handleDelete} className={button}><DeleteIcon
                    style={{ fontSize: "medium", color: "white" }}/></button>
            </div>
        </div>
    );
};

export default BoardCard;