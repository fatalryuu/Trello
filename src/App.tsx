import { app } from "./App.css.ts";
import BoardsPage from "./components/BoardsPage/BoardsPage.tsx";
import BoardPage from "./components/BoardPage/BoardPage.tsx";
import SideBar from "./components/SideBar/SideBar.tsx";
import { Routes, Route } from "react-router-dom";
import React from "react";

const App: React.FC = () => {
    return (
        <div className={app}>
            <SideBar/>
            <Routes>
                <Route path="/" element={<BoardsPage/>}/>
                <Route path="/:name" element={<BoardPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
