import React, { useState } from "react";
import { add, form, plus, text, input } from "./SmartButton.css.ts";
import { closeButton, lower, submit } from "../../SmartButton/SmartButton.css.ts";
import { ListType } from "../../../../redux/slices/listsSlice.ts";
import { addAction } from "../../../../redux/slices/menuSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store.ts";
import { addTask } from "../../../../redux/slices/tasksSlice.ts";
import { getFilteredListsSelector } from "../../../../selectors/selectors.ts";

type PropsType = {
    boardId: number,
    listId: number,
}

const SmartButton: React.FC<PropsType> = ({ boardId, listId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskName, setTaskName] = useState("");

    const lists: Array<ListType> = useSelector((state: RootState) => getFilteredListsSelector(state, boardId));

    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        if (taskName) {
            const id: number = Math.round(Math.random() * 10000);
            dispatch(addTask({ id, name: taskName, description: "", listId }));
            dispatch(addAction({
                text: `added card "${taskName}" to the list "${lists.find((list: ListType) => list.id === listId)?.name}"`,
                boardId
            }));
            setTaskName("");
            setIsOpen(false);
        }
    };

    const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setTaskName("");
        setIsOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //max 16 symbols
        if (taskName.length < 16 || e.target.value === taskName.substring(0, taskName.length - 1) || e.target.value === "") {
            setTaskName(e.target.value)
        }
    }

    return (
        <div onClick={() => setIsOpen(true)} className={!isOpen ? add : form}>
            {isOpen
                ? <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter name for this card"
                        value={taskName}
                        onChange={handleChange}
                        className={input}
                        autoFocus={true}
                    />
                    <div className={lower}>
                        <input type="submit" className={submit} value="Add Card"/>
                        <button onClick={onClose} className={closeButton}>X</button>
                    </div>
                </form>
                : <>
                    <span className={plus}>
                        +&nbsp;
                    </span>
                    <span className={text}>
                        Add Card
                    </span>
                </>
            }
        </div>
    );
};

export default SmartButton;