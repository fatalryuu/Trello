import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListType = {
    id: number;
    name: string;
    boardId: number;
}

export type ListsState = {
    lists: ListType[];
}

const initialState: ListsState = {
    lists: [],
};

export const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        addList(state, action: PayloadAction<{ name: string, boardId: number }>) {
            const { name, boardId } = action.payload;
            state.lists.push({
                id: state.lists.length + 1,
                name,
                boardId,
            });
        },
        deleteList(state, action: PayloadAction<number>) {
            state.lists = state.lists.filter(list => list.id !== action.payload);
        },
        editList(state, action: PayloadAction<{ id: number, name: string }>) {
            const { id, name } = action.payload;
            const list = state.lists.find(list => list.id === id);
            if (list) {
                list.name = name;
            }
        },
    },
});

export const { addList, deleteList, editList } = listsSlice.actions;
export default listsSlice.reducer;