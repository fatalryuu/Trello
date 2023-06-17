import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../../../redux/slices/boards.ts";

type PropsType = {
    isOpen: boolean,
    setIsOpen: () => void
}

const Popup: React.FC<PropsType> = ({isOpen, setIsOpen}) => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setName("");
    }, [isOpen]);

    const handleSubmit = () => {
        dispatch(addBoard({name}));
        setIsOpen(false);
    }

    return (
        <div hidden={!isOpen}>
            <button onClick={() => setIsOpen(false)}>X</button>
            <h2>Create board</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Board header</label>
                <br/>
                <input type="text" id="name" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <br/>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
};

export default Popup;