import React, { useState } from "react";
import { ListType } from "../../../redux/slices/listsSlice.ts";
import { AppDispatch, RootState } from "../../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { header, wrapper, text } from "./List.css.ts";
import { TaskType, updateTasks } from "../../../redux/slices/tasksSlice.ts";
import Task from "./Task/Task.tsx";
import { addAction } from "../../../redux/slices/menuSlice.ts";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import SmartButton from "./SmartButton/SmartButton.tsx";
import Options from "./Popup/Options.tsx";
import DescriptionPopup from "./Task/Popup/DescriptionPopup.tsx";

type PropsType = {
    info: ListType,
}

const List: React.FC<PropsType> = ({ info }) => {
    const { id, name, boardId } = info;
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch: AppDispatch = useDispatch();

    const tasks: Array<TaskType> = useSelector((state: RootState) => state.tasks.tasks.filter((task: TaskType) => task.listId === id));

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(tasks);
        const [reorderItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderItem);

        dispatch(addAction({ text: `moved task "${reorderItem.name}"`, boardId }));
        dispatch(updateTasks(items));
    };

    return (
        <div className={wrapper}>
            <header className={header}>
                <span className={text} hidden={isVisible}>{name}</span>
                <Options id={id} name={name} boardId={boardId} isVisible={isVisible} setIsVisible={setIsVisible}/>
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
                                            <>
                                                <div {...provided.draggableProps} {...provided.dragHandleProps}
                                                     ref={provided.innerRef}>
                                                    <Task info={task} setIsOpen={setIsOpen}/>
                                                </div>
                                                <DescriptionPopup name={task.name} list={name} initDesc={task.description} boardId={boardId} taskId={task.id}
                                                                  isOpen={isOpen} setIsOpen={setIsOpen}/>
                                            </>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <SmartButton boardId={boardId} listId={id}/>
        </div>
    );
};

export default List;