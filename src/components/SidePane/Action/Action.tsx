import React from "react";
import { wrapper } from "./Action.css.ts";
import { ActionType } from "../../../redux/slices/menuSlice.ts";

type PropsType = {
    info: ActionType,
}

const getTimeString = (timeDifference: number): string => {
    if (timeDifference < 1000) { // < 1 sec
        return "just now";
    } else if (timeDifference < 60000) { // < 1 min
        const secondsAgo = Math.floor(timeDifference / 1000);
        return `${secondsAgo} second(-s) ago`;
    } else if (timeDifference < 3600000) { // < 1 hr
        const minutesAgo = Math.floor(timeDifference / 60000);
        return `${minutesAgo} minute(-s) ago`;
    } else if (timeDifference < 86400000) { // < 24 hr
        const hoursAgo = Math.floor(timeDifference / 3600000);
        return `${hoursAgo} hour(-s) ago`;
    } else { // more than 24 hr ago
        return "more than a day ago";
    }
};

const Action: React.FC<PropsType> = ({ info }) => {
    const { text, date } = info;
    const timeDifference = (new Date()).getTime() - (new Date(date)).getTime();
    const timeAgo = getTimeString(timeDifference);

    return (
        <div className={wrapper}>
            {text}
            <br/>
            {timeAgo}
        </div>
    );
};

export default Action;