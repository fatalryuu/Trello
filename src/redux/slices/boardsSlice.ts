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
        addBoard: (state, action: PayloadAction<BoardType>) => {
            const { id, name } = action.payload;
            state.boards.push({
                id,
                name,
            });
        },
        deleteBoard: (state, action: PayloadAction<number>) => {
            state.boards = state.boards.filter((board: BoardType) => board.id !== action.payload);
        },
        editBoard: (state, action: PayloadAction<BoardType>) => {
            const { id, name } = action.payload;
            const board: BoardType | undefined = state.boards.find((board: BoardType) => board.id === id);
            if (board) {
                board.name = name;
            }
        },
    },
});

export const { addBoard, deleteBoard, editBoard } = boardsSlice.actions;

export default boardsSlice.reducer;