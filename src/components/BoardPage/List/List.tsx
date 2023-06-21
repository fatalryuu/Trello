import React, { useState } from "react";
import { deleteList, editList, ListType } from "../../../redux/slices/listsSlice.ts";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { header, wrapper } from "./List.css.ts";
import { TaskType, updateTasks } from "../../../redux/slices/tasksSlice.ts";
import Task from "./Task/Task.tsx";
import Popup from "../../Popup/Popup.tsx";
import { addAction } from "../../../redux/slices/menuSlice.ts";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

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
                dispatch(addAction({ text: `You renamed list "${name}" to "${newName}"`, boardId }));
                setIsVisible(false);
                setNewName("");
            }
        }
    };

    const tasks: Array<TaskType> = useSelector((state: RootState) => state.tasks.tasks.filter((task: TaskType) => task.listId === id));

    const handleDelete = () => {
        dispatch(deleteList(id));
        dispatch(addAction({ text: `You deleted list "${name}"`, boardId }));
    };

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderItem);

        dispatch(updateTasks(items));
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
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task: TaskType, index: number) => {
                                return (
                                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                        {(provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <Task info={task}/>
                                            </div>
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={() => setIsOpen(true)}>Add Task</button>
        </div>
    );
};

export default List;