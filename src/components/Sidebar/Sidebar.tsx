import React from "react";
import Element from "./Element/Element.tsx";
import { wrapper } from "./Sidebar.css.ts";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
    return (
        <div className={wrapper}>
            <h2><NavLink to="/">Boards</NavLink></h2>
            <h3>My boards</h3>
            <div>
                <Element name="first"/>
                <Element name="second"/>
                <Element name="third"/>
            </div>
        </div>
    );
};

export default Sidebar;