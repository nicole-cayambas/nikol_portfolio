import React, { useState } from 'react'
import CloseButton from './buttons/CloseBtn'
import MinimizeButton from './buttons/MinimizeBtn'
import MaximizeButton from './buttons/MaximizeBtn'

const titleBarHeight = '56px';

export const WindowTitleBar = ({width = "314px", color = "orange", closeWindow, minimizeWindow, children}) => {
  return (
    <div className="p-(--window-padding) flex flex-row justify-between items-center border-(length:--border-stroke) border-(--border-color) absolute" 
      style={{ height: titleBarHeight, backgroundColor: `var(--${color})`, top: "0", left: "0", width: width, borderRadius: "var(--window-border-radius) var(--window-border-radius) 0 0" }}>
        <span className="">{children}</span>
        <div className="flex flex-row justify-center gap-[6px]">
          <MinimizeButton onClick={minimizeWindow}/>
          <MaximizeButton />
          <CloseButton onClick={closeWindow}/>
        </div>
      </div>
  );
};

const Window = ({width = "314px", height = "155px"}) => {

  const [isWindowOpen, setWindowOpen] = useState(true);

  const closeWindow = () => {
    if (!isWindowOpen) return;
    setWindowOpen((prev) => !prev);
  }
    
  return (
    isWindowOpen ? <div className="border-(length:--border-stroke) border-(--border-color) rounded-(--window-border-radius)" style={{width, height}}>
      <WindowTitleBar closeWindow={closeWindow}>Info</WindowTitleBar>
      <div className="p-(--window-padding) mt-[56px]">
        Work in progress...
      </div>
    </div>
    : <></>
  )
}

export default Window