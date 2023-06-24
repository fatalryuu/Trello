import React from "react";
import { wrapper, menuHeader, actionsHeader, text } from "./SidePane.css.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { ActionType } from "../../redux/slices/menuSlice.ts";
import Action from "./Action/Action.tsx";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { getFilteredActions } from "../../selectors/selectors.ts";

type PropsType = {
    boardId: number,
}

const SidePane: React.FC<PropsType> = ({ boardId }) => {
    const actions = useSelector((state: RootState) => getFilteredActions(state, boardId));
    const actionsUI = actions.sort((a, b) => b.id - a.id).map((action: ActionType) => <Action info={action} key={action.id}/>);

    return (
        <div className={wrapper}>
            <h2 className={menuHeader}>Menu</h2>
            <h3 className={actionsHeader}>
                <FormatListBulletedIcon style={{fontSize: "medium"}}/>
                <span className={text}>Actions</span>
            </h3>
            {actionsUI}
        </div>
    );
};

export default SidePane;