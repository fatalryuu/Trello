import { configureStore } from '@reduxjs/toolkit'
import { boardsSlice } from "./slices/boardsSlice.ts";

export const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch