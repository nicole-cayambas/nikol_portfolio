import { useEffect, useRef, useState } from "react";
import "./App.css";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import AboutMe from "./components/windows/AboutMe";
import { programsConfig } from "./config";

function App() {
  const [windowState, setWindowState] = useState(programsConfig);
  const windowRef = useRef(null);

  useEffect(() => {}, [windowState]);

  return (
    <>
      <div className="app-desktop" ref={windowRef}>
        {windowState.map((window, key) => {
          const Child = window?.component;
          return window?.isOpen ? (
            <Window
              key={key}
              window={window}
              setWindows={setWindowState}
              windowRef={windowRef}
            >
              {Child && <Child />}
            </Window>
          ) : (
            <></>
          );
        })}
      </div>
      <Taskbar />
    </>
  );
}

export default App;
