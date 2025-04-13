import React, { useRef, useState } from "react";
import CloseButton from "./buttons/CloseBtn";
import MinimizeButton from "./buttons/MinimizeBtn";
import MaximizeButton from "./buttons/MaximizeBtn";
import { maxWindowHeight, maxWindowWidth, titleBarHeight } from "../config";

export const WindowTitleBar = ({
  width = "314px",
  color = "orange",
  closeWindow,
  maximizeWindow,
  children,
  ...props
}) => {
  return (
    <div
      className="p-(--window-padding) flex flex-row justify-between items-center border-(length:--border-stroke) border-(--border-color) absolute"
      style={{
        height: titleBarHeight,
        backgroundColor: `var(--${color})`,
        top: "calc(var(--border-stroke, 5px) * -1)",
        left: "calc(var(--border-stroke, 5px) * -1)",
        width: width,
        borderRadius:
          "var(--window-border-radius) var(--window-border-radius) 0 0",
      }}
      {...props}
    >
      <span className="">{children}</span>
      <div className="flex flex-row justify-center gap-[6px]">
        <MinimizeButton onClick={closeWindow} />
        <MaximizeButton onClick={maximizeWindow} />
        <CloseButton onClick={closeWindow} />
      </div>
    </div>
  );
};

const Window = ({
  window = null,
  setWindows,
  windowRef,
  topZIndex,
  children,
}) => {
  const [position, setPosition] = useState({
    x: window.position.x,
    y: window.position.y,
  });
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent text selection
    topZIndex.current += 1;
    setWindows((prev) =>
      prev.map((w) =>
        w.id === window.id ? { ...w, zIndex: topZIndex.current } : w
      )
    );
    isDragging.current = true;
    offset.current = {
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;

    const containerWidth = rect.width;
    const containerHeight = rect.height;

    const windowWidth = parseInt(window.width);
    const windowHeight = parseInt(window.height);
    const padding = 10;

    const maxX = containerWidth - windowWidth - padding;
    const maxY = containerHeight - windowHeight - padding;

    let newX = e.clientX - offset.current.x - rect.left;
    let newY = e.clientY - offset.current.y - rect.top;

    // Clamp to container boundaries
    newX = Math.max(padding, Math.min(newX, maxX));
    newY = Math.max(padding, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.body.classList.remove("dragging");
  };

  const closeWindow = () => {
    if (!window.isOpen) return;
    setWindows((prev) =>
      prev.map((w) => (w.id === window.id ? { ...w, isOpen: false } : w))
    );
  };

  const maximizeWindow = () => {
    setPosition({ x: 10, y: 10 });
    setWindows((prev) =>
      prev.map((w) =>
        w.id === window.id ? { ...w, width: "95vw", height: "85vh" } : w
      )
    );
  };

  return window && window.isOpen ? (
    <div
      className="border-(length:--border-stroke) border-(--border-color) rounded-(--window-border-radius) absolute"
      style={{
        zIndex: window.zIndex,
        width: window.width,
        height: window.height,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging.current ? "none" : "transform 0.1s ease-out",
        backgroundColor: "var(--desktop-background-color)",
        boxShadow: "-4px 3px 0 var(--border-color)",
      }}
    >
      <WindowTitleBar
        onMouseDown={handleMouseDown}
        closeWindow={closeWindow}
        color={window.color}
        maximizeWindow={maximizeWindow}
        width={window.width}
      >
        {window.title}
      </WindowTitleBar>
      <div className="p-(--window-padding) mt-[56px] h-[calc(100%)]">
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Window;
