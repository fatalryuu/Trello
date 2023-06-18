import React from "react";
import { ListType } from "../../../redux/slices/listsSlice.ts";

type PropsType = {
    info: ListType,
}

const List: React.FC<PropsType> = ({ info }) => {
    const { id, name } = info;

    return (
        <div>
            {id}{name}
        </div>
    );
};

export default List;