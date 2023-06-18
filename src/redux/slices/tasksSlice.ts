import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskType = {
    id: number;
    name: string;
    description: string | null;
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
        addTask(state, action: PayloadAction<{ name: string, listId: number }>) {
            const { name, listId } = action.payload;
            state.tasks.push({
                id: state.tasks.length + 1,
                name,
                description: null,
                listId,
            });
        },
        deleteTask(state, action: PayloadAction<number>) {
            state.tasks = state.tasks.filter((task: TaskType) => task.id !== action.payload);
        },
        editTask(state, action: PayloadAction<{ id: number, name: string, description: string }>) {
            const { id, name, description } = action.payload;
            const task: TaskType | undefined = state.tasks.find((task: TaskType) => task.id === id);
            if (task) {
                task.name = name;
                task.description = description;
            }
        },
    },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;