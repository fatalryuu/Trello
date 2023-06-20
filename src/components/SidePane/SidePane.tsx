import React from "react";
import { wrapper } from "./SidePane.css.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { ActionType } from "../../redux/slices/menuSlice.ts";
import Action from "./Action/Action.tsx";

type PropsType = {
    boardId: number,
}

const SidePane: React.FC<PropsType> = ({ boardId }) => {
    const actions = useSelector((state: RootState) => state.menu.actions.filter((action: ActionType) => action.boardId === boardId));
    const actionsUI = actions.reverse().map((action: ActionType) => <Action info={action} key={action.id}/>);

    return (
        <div className={wrapper}>
            <h2>Menu</h2>
            <h3>Actions</h3>
            {actionsUI}
        </div>
    );
};

export default SidePane;