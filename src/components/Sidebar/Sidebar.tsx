import React from "react";
import Element from "./Element/Element.tsx";
import { wrapper } from "./Sidebar.css.ts";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { Board } from "../../redux/slices/boardsSlice.ts";

const Sidebar: React.FC = () => {
    const boards = useSelector((state: RootState) => state.boards.boards);
    const elements = boards.map((b: Board) => <Element name={b.name} key={b.id}/>);
    return (
        <div className={wrapper}>
            <h2><NavLink to="/">Boards</NavLink></h2>
            <h3>My boards</h3>
            <div>
                {elements}
            </div>
        </div>
    );
};

export default Sidebar;