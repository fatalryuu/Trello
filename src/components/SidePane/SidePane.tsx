import React from "react";
import { wrapper, menu__header, actions__header, text } from "./SidePane.css.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { ActionType } from "../../redux/slices/menuSlice.ts";
import Action from "./Action/Action.tsx";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

type PropsType = {
    boardId: number,
}

const SidePane: React.FC<PropsType> = ({ boardId }) => {
    const actions = useSelector((state: RootState) => state.menu.actions.filter((action: ActionType) => action.boardId === boardId));
    const actionsUI = actions.reverse().map((action: ActionType) => <Action info={action} key={action.id}/>);

    return (
        <div className={wrapper}>
            <h2 className={menu__header}>Menu</h2>
            <h3 className={actions__header}>
                <FormatListBulletedIcon style={{fontSize: "medium"}}/>
                <span className={text}>Actions</span>
            </h3>
            {actionsUI}
        </div>
    );
};

export default SidePane;