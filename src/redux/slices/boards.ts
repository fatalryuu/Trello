import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Board = {
    id: number,
    name: string,
}

export type CounterState = {
    boards: Array<Board>,
}

const initialState: CounterState = {
    boards: [],
};

export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        addBoard: (state, action: PayloadAction<{ name: string }>) => {
            state.boards.push({
                id: state.boards.length + 1,
                name: action.payload.name,
            });
        },
        deleteBoard: (state, action: PayloadAction<{ id: number }>) => {
            state.boards.filter(b => b.id !== action.payload.id);
        },
    },
});

export const {addBoard, deleteBoard} = boardsSlice.actions;

export default boardsSlice.reducer;