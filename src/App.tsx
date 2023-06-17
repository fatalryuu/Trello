import { app } from './App.css.ts'
import Boards from "./components/Boards/Boards.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import React from "react";

const App: React.FC = () => {
    return (
        <div className={app}>
            <Sidebar/>
            <Boards />
        </div>
    )
}

export default App
