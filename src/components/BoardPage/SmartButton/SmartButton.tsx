import React, { useState } from "react";
import { add, closeButton, form, input, lower, plus, submit } from "./SmartButton.css.ts";
import { addList, ListType } from "../../../redux/slices/listsSlice.ts";
import { addAction } from "../../../redux/slices/menuSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { getFilteredListsSelector } from "../../../selectors/selectors.ts";

type PropsType = {
    boardId: number,
}

const SmartButton: React.FC<PropsType> = ({ boardId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [listName, setListName] = useState("");

    const lists: Array<ListType> = useSelector((state: RootState) => getFilteredListsSelector(state, boardId));

    const dispatch: AppDispatch = useDispatch();

    const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (listName && !lists.some((list: ListType) => list.name === listName && list.boardId === boardId)) {
            const id: number = Math.round(Math.random() * 10000);
            dispatch(addList({ id, name: listName, boardId }));
            dispatch(addAction({ text: `added list "${listName}" to this board`, boardId }));
            setListName("");
            setIsOpen(false);
        } else {
            return;
        }
    };

    const onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setListName("");
        setIsOpen(false);
    };

    return (
        <div onClick={() => setIsOpen(true)} className={!isOpen ? add : form}>
            {isOpen
                ? <div>
                    <input
                        type="text"
                        placeholder="Enter list name"
                        value={listName}
                        onChange={(e) => setListName(e.target.value)}
                        className={input}
                        autoFocus={true}
                    />
                    <div className={lower}>
                        <button onClick={onAddClick} className={submit}>Add List</button>
                        <button onClick={onClose} className={closeButton}>X</button>
                    </div>
                </div>
                : <>
                    <span className={plus}>
                        +&nbsp;
                    </span>
                    Add List
                </>
            }
        </div>
    );
};

export default SmartButton;