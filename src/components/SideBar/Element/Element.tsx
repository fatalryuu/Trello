import React from "react";
import { active, element } from "../SideBar.css.ts";
import { preview } from "./Element.css.ts";
import { NavLink } from "react-router-dom";

type PropType = {
    name: string,
}

const Element: React.FC<PropType> = ({name}) => {
    return (
        <NavLink to={name} className={({isActive}) => isActive ? `${element} ${active}` : element}>
            <div className={preview}></div>
            <span>{name}</span>
        </NavLink>
    );
};

export default Element;