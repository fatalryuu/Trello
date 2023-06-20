import React, { useState } from "react";
import { deleteList, editList, ListType } from "../../../redux/slices/listsSlice.ts";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { header, wrapper } from "./List.css.ts";
import { TaskType } from "../../../redux/slices/tasksSlice.ts";
import Task from "./Task/Task.tsx";
import Popup from "../../Popup/Popup.tsx";
import { addAction } from "../../../redux/slices/menuSlice.ts";

type PropsType = {
    info: ListType,
}

const List: React.FC<PropsType> = ({ info }) => {
    const { id, name, boardId } = info;
    const dispatch: AppDispatch = useDispatch();
    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists);
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [newName, setNewName] = useState("");
    const handleRename = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
        if (isVisible && newName) {
            if (!lists.some((list: ListType) => list.name === newName && list.boardId === boardId)) {
                dispatch(editList({ id, name: newName }));
                dispatch(addAction({text: `You renamed list "${name}" to "${newName}"`, boardId}));
                setIsVisible(false);
                setNewName("");
            }
        }
    };

    const tasks: Array<TaskType> = useSelector((state: RootState) => state.tasks.tasks.filter((task: TaskType) => task.listId === id));
    const tasksUI: Array<JSX.Element> = tasks.map((task: TaskType) => <Task info={task} key={task.id}/>);

    const handleDelete = () => {
        dispatch(deleteList(id));
        dispatch(addAction({text: `You deleted list "${name}"`, boardId}));
    }

    return (
        <div className={wrapper}>
            <Popup boardId={boardId} listId={id} taskId={null} isOpen={isOpen} setIsOpen={setIsOpen}/>
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
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </header>
            <br/>
            {tasksUI}
            <button onClick={() => setIsOpen(true)}>Add Task</button>
        </div>
    );
};

export default List;