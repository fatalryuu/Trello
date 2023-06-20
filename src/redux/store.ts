import { configureStore } from '@reduxjs/toolkit'
import { boardsSlice } from "./slices/boardsSlice.ts";
import { listsSlice } from "./slices/listsSlice.ts";
import { tasksSlice } from "./slices/tasksSlice.ts";
import { menuSlice } from "./slices/menuSlice.ts";

export const store = configureStore({
    reducer: {
        boards: boardsSlice.reducer,
        lists: listsSlice.reducer,
        tasks: tasksSlice.reducer,
        menu: menuSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch