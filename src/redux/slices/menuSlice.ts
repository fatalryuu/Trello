import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ActionType = {
    id: number;
    text: string;
    date: number;
    boardId: number;
}

export type MenuState = {
    actions: ActionType[];
}

const initialState: MenuState = {
    actions: [],
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addAction(state, action: PayloadAction<{ text: string, boardId: number }>) {
            const { text, boardId } = action.payload;
            state.actions.push({
                id: state.actions.length + 1,
                text,
                date: Date.now(),
                boardId,
            });
        },
    },
});

export const { addAction } = menuSlice.actions;
export default menuSlice.reducer;