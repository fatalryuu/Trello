import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, BoardType } from "../../redux/slices/boardsSlice.ts";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { addList, ListType } from "../../redux/slices/listsSlice.ts";
import { addDescription, addTask, TaskType } from "../../redux/slices/tasksSlice.ts";
import { addAction } from "../../redux/slices/menuSlice.ts";

type PropsType = {
    boardId: number,
    listId: number | null,
    taskId: number | null,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const Popup: React.FC<PropsType> = ({ boardId, listId, taskId, isOpen, setIsOpen }) => {
    const [name, setName] = useState("");
    const dispatch: AppDispatch = useDispatch();
    const boards: Array<BoardType> = useSelector((state: RootState) => state.boards.boards);
    const lists: Array<ListType> = useSelector((state: RootState) => state.lists.lists);
    const tasks: Array<TaskType> = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        setName("");
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!boardId && !listId && !taskId) {
            if (!boards.some((board: BoardType) => board.name === name)) {
                dispatch(addBoard(name));
                dispatch(addAction({text: `You created this board`, boardId: boards.length + 1}));
            } else {
                return;
            }
        } else if (listId) {
            dispatch(addTask({name, listId}));
            dispatch(addAction({text: `You added card "${name}" to the list "${lists.find((list: ListType) => list.id === listId)?.name}"`, boardId}));
        } else if (taskId) {
            dispatch(addDescription({ id: taskId, description: name }));
            dispatch(addAction({text: `You added description "${name}" to the "${tasks.find((task: TaskType) => task.id === taskId)?.name}" card`, boardId}));
        } else if (boardId) {
            if (!lists.some((list: ListType) => list.name === name && list.boardId === boardId)) {
                dispatch(addList({ name, boardId }));
                dispatch(addAction({text: `You added list "${name}" to this board`, boardId}));
            } else {
                return;
            }
        }
        setIsOpen(false);
    };

    return (
        <div hidden={!isOpen}>
            <button onClick={() => setIsOpen(false)}>X</button>
            <h2>{boardId ? "Create List" : "Create board"}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">{taskId ? "Description:" : "Name:"}</label>
                <br/>
                <input type="text" id="name" value={name} autoComplete="off"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <br/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
};

export default Popup;