import { createSelector } from '@reduxjs/toolkit';
import { RootState } from "../redux/store.ts";

const getBoards = (state: RootState) => state.boards;

export const getBoardsSelector = createSelector(
    getBoards,
    boards => boards.boards
);

const getLists = (state: RootState) => state.lists.lists;
const getBoardId = (_state: RootState, boardId: number) => boardId;

export const getFilteredListsSelector = createSelector(
    [getLists, getBoardId],
    (lists, boardId) => lists.filter(list => list.boardId === boardId)
);

const getTasks = (state: RootState) => state.tasks.tasks;
const getListId = (_state: RootState, listId: number) => listId;

export const getFilteredTasksSelector = createSelector(
    [getTasks, getListId],
    (tasks, listId) => tasks.filter(task => task.listId === listId)
);

export const geAllTasksSelector = createSelector(
    getTasks,
    (tasks) => tasks
);

const getActions = (state: RootState) => state.menu.actions;

export const getFilteredActions = createSelector(
    [getActions, getBoardId],
    (actions, boardId) => actions.filter(action => action.boardId === boardId)
)