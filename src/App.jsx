import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";

function App() {
  return (
    <>
      <div className="app-desktop">
        <Window></Window>
      </div>
      <Taskbar />
    </>
  );
}

export default App;
