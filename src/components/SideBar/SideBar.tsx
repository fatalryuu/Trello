import React from "react";
import Element from "./Element/Element.tsx";
import { wrapper } from "./SideBar.css.ts";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { BoardType } from "../../redux/slices/boardsSlice.ts";
import { trello__header, active, element, text, boards__header } from "./SideBar.css.ts";
import GridViewIcon from '@mui/icons-material/GridView';

const SideBar: React.FC = () => {
    const boards = useSelector((state: RootState) => state.boards.boards);
    const elements = boards.map((b: BoardType) => <Element name={b.name} key={b.id}/>);
    return (
        <div className={wrapper}>
            <h1 className={trello__header}>Trello</h1>
            <h2>
                <NavLink to="/" className={({ isActive }) => isActive ? `${element} ${active}` : element}>
                    <GridViewIcon style={{ fontSize: "medium" }}/>
                    <span className={text}>Boards</span>
                </NavLink>
            </h2>
            <h3 className={boards__header}>My boards</h3>
            <div>
                {elements}
            </div>
        </div>
    );
};

export default SideBar;