import { useEffect, useRef, useState } from "react";
import "./App.css";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import { programsConfig } from "./config";

function App() {
  const [windowState, setWindowState] = useState(programsConfig);
  const windowRef = useRef(null);
  const topZIndex = useRef(10); // starting value

  useEffect(() => {}, [windowState]);

  const openWindow = (e, window) => {
    e.preventDefault();
    topZIndex.current += 1;
    setWindowState((prev) =>
      prev.map((w) =>
        w.id === window.id
          ? { ...w, isOpen: true, zIndex: topZIndex.current }
          : w
      )
    );
  };

  return (
    <>
      <div className="app-desktop" ref={windowRef}>
        <div className="programs-directory flex flex-col absolute">
          {programsConfig.map((program, key) => {
            const isProgram = program.type === "program";
            return isProgram ? (
              <a
                key={key}
                className="w-[80px] hand-cursor m-[24px] text-center"
                onClick={(e) => openWindow(e, program)}
              >
                <div className="text-[3rem]">{program.shortcut}</div>
                <div className="text-[11pt] text-center">{program.title}</div>
              </a>
            ) : null;
          })}
        </div>
        {windowState.map((window, key) => {
          const Child = window?.component;
          return window?.isOpen ? (
            <Window
              key={key}
              window={window}
              setWindows={setWindowState}
              windowRef={windowRef}
              topZIndex={topZIndex}
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
