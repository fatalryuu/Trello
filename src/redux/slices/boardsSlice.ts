import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BoardType = {
    id: number,
    name: string,
}

export type BoardsState = {
    boards: Array<BoardType>,
}

const initialState: BoardsState = {
    boards: [],
};

export const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        addBoard: (state, action: PayloadAction<string>) => {
            state.boards.push({
                id: state.boards.length + 1,
                name: action.payload,
            });
        },
        deleteBoard: (state, action: PayloadAction<number>) => {
            state.boards = state.boards.filter(b => b.id !== action.payload);
        },
        editBoard: (state, action: PayloadAction<BoardType>) => {
            const { id, name } = action.payload;
            const board = state.boards.find(board => board.id === id);
            if (board) {
                board.name = name;
            }
        },
    },
});

export const {addBoard, deleteBoard, editBoard} = boardsSlice.actions;

export default boardsSlice.reducer;