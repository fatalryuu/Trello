import { app } from "./App.css.ts";
import Boards from "./components/Boards/Boards.tsx";
import Board from "./components/Board/Board.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { Routes, Route } from "react-router-dom";
import React from "react";

const App: React.FC = () => {
    return (
        <div className={app}>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Boards/>}/>
                <Route path="/:name" element={<Board/>}/>
            </Routes>
        </div>
    );
};

export default App;
