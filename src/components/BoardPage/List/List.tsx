import React, { useState } from "react";
import { deleteList, editList, ListType } from "../../../redux/slices/listsSlice.ts";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";

type PropsType = {
    info: ListType,
}

const List: React.FC<PropsType> = ({ info }) => {
    const { id, name , boardId} = info;
    const dispatch: AppDispatch = useDispatch();
    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists);
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const handleRename = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
        if (isVisible && newName) {
            if (!lists.some((list: ListType) => list.name === newName && list.boardId === boardId)) {
                dispatch(editList({id, name: newName}));
                setIsVisible(false);
                setNewName("");
            }
        }
    }

    return (
        <div>
            {name}
            <button onClick={handleRename}>
                {isVisible ? "Confirm" : "Rename"}
            </button>
            <input type="text"
                   placeholder="New name..."
                   value={newName}
                   onChange={(e) => setNewName(e.target.value)}
                   hidden={!isVisible}
            />
            <button onClick={() => dispatch(deleteList(id))}>Delete</button>
            <button>Add Task</button>
        </div>
    );
};

export default List;