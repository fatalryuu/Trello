import React from "react";
import Element from "./Element/Element.tsx";
import { wrapper } from "./Sidebar.css.ts";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar: React.FC = () => {
    const boards = useSelector(state => state.boards.boards);
    const elements = boards.map(b => <Element name={b.name} key={b.id}/>);
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