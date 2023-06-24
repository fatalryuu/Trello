import React, { useState } from "react";
import { ListType } from "../../../redux/slices/listsSlice.ts";
import {  RootState } from "../../../redux/store.ts";
import { useSelector } from "react-redux";
import { header, wrapper, text } from "./List.css.ts";
import { TaskType } from "../../../redux/slices/tasksSlice.ts";
import Task from "./Task/Task.tsx";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import SmartButton from "./SmartButton/SmartButton.tsx";
import Options from "./Popup/Options.tsx";
import { getFilteredTasksSelector } from "../../../selectors/selectors.ts";
import DescriptionPopup from "./Task/Popup/DescriptionPopup.tsx";

type PropsType = {
    info: ListType,
}

const List: React.FC<PropsType> = ({ info }) => {
    const { id, name, boardId } = info;
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [taskInfo, setTaskInfo] = useState<TaskType>({
        id: 0,
        name: "",
        description: "",
        listId: 0
    });

    const tasks: Array<TaskType> = useSelector((state: RootState) => getFilteredTasksSelector(state, id));

    return (
        <>
            <DescriptionPopup name={taskInfo.name}
                              list={name}
                              initDesc={taskInfo.description}
                              boardId={boardId}
                              taskId={taskInfo.id}
                              isOpen={isOpen}
                              setIsOpen={setIsOpen}/>
            <div className={wrapper}>
                <header className={header}>
                    <span className={text} hidden={isVisible}>{name}</span>
                    <Options id={id} name={name} boardId={boardId} isVisible={isVisible} setIsVisible={setIsVisible}/>
                </header>
                <br/>
                <Droppable droppableId={id.toString()} key={id}>
                    {(provided) => {
                        return (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map((task: TaskType, index) => {
                                    return (
                                        <Draggable
                                            key={task.id}
                                            draggableId={task.id.toString()}
                                            index={index}
                                        >
                                            {(provided) => {
                                                return (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <Task info={task} setIsOpen={setIsOpen}
                                                              setTaskInfo={setTaskInfo}/>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
                <SmartButton boardId={boardId} listId={id}/>
            </div>
        </>
    );
};

export default List;