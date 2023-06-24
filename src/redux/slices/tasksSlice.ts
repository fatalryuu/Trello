import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskType = {
    id: number;
    name: string;
    description: string;
    listId: number;
}

export type TasksState = {
    tasks: TaskType[];
}

const initialState: TasksState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<TaskType>) {
            const { id, name, description, listId } = action.payload;
            state.tasks.push({
                id,
                name,
                description,
                listId,
            });
        },
        deleteTask(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter((task: TaskType) => task.id !== action.payload);
        },
        editTask(state, action: PayloadAction<{ id: number, name: string }>) {
            const { id, name } = action.payload;
            const task: TaskType | undefined = state.tasks.find((task: TaskType) => task.id === id);
            if (task) {
                task.name = name;
            }
        },
        addDescription(state, action: PayloadAction<{ id: number, description: string }>) {
            const { id, description } = action.payload;
            const task: TaskType | undefined = state.tasks.find((task: TaskType) => task.id === id);
            if (task) {
                task.description = description;
            }
        },
        updateTasks(state, action: PayloadAction<Array<TaskType>>) {
            state.tasks = state.tasks.filter((task: TaskType) => !action.payload.find((t: TaskType) => t.id === task.id));
            state.tasks.unshift(...action.payload);
        },
        moveTask(state, action: PayloadAction<{listId: number, tasks: Array<TaskType>}>) {
            state.tasks = state.tasks.filter((task: TaskType) => !action.payload.tasks.find((t: TaskType) => t.id === task.id));
            state.tasks.unshift(...action.payload.tasks.map((task: TaskType) => {
                return {
                    ...task,
                    listId: action.payload.listId
                }
            }));
        },
    },
});

export const { addTask, deleteTask, editTask, addDescription, updateTasks, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;