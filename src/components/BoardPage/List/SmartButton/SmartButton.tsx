import React, { useState } from "react";
import { add, form, plus } from "./SmartButton.css.ts";
import { closeButton, input, lower, submit } from "../../SmartButton/SmartButton.css.ts";
import { ListType } from "../../../../redux/slices/listsSlice.ts";
import { addAction } from "../../../../redux/slices/menuSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store.ts";
import { addTask } from "../../../../redux/slices/tasksSlice.ts";

type PropsType = {
    boardId: number,
    listId: number,
}

const SmartButton: React.FC<PropsType> = ({ boardId, listId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskName, setTaskName] = useState("");

    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists.filter((list: ListType) => list.boardId === boardId));

    const dispatch: AppDispatch = useDispatch();

    const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const id: number = Math.round(Math.random() * 10000);
        dispatch(addTask({ id, name: taskName, description: null, listId }));
        dispatch(addAction({
            text: `added card "${taskName}" to the list "${lists.find((list: ListType) => list.id === listId)?.name}"`,
            boardId
        }));
        setTaskName("");
        setIsOpen(false);
    };

    const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setTaskName("");
        setIsOpen(false);
    };

    return (
        <button onClick={() => setIsOpen(true)} className={!isOpen ? add : form}>
            {isOpen
                ? <div>
                    <input
                        type="text"
                        placeholder="Enter name for this card"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className={input}
                        autoFocus={true}
                    />
                    <div className={lower}>
                        <button onClick={onAddClick} className={submit}>Add Card</button>
                        <button onClick={onClose} className={closeButton}>X</button>
                    </div>
                </div>
                : <>
                    <span className={plus}>
                        +&nbsp;
                    </span>
                    Add Card
                </>
            }
        </button>
    );
};

export default SmartButton;