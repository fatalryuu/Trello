import React from "react";
import { NavLink } from "react-router-dom";

type PropsType = {
    name: string,
}

const BoardCard: React.FC<PropsType> = ({ name }) => {
    return (
        <NavLink to={name}>
            {name}
        </NavLink>
    );
};

export default BoardCard;