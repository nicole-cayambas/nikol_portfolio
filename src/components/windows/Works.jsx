import React, { useState } from "react";
import { worksConfig } from "../../config";

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(worksConfig[0]);
  const handleDoubleClickWork = (work) => {
    setSelectedWork(work);
    window.open(work.link, "_blank"); // or use `_self` for same tab
  };
  const handleClickWork = (e, work) => {
    e.preventDefault();
    setSelectedWork(work);
  };
  return (
    <div>
      <div className="w-[100%] flex gap-[10px] mb-[1rem]">
        <img
          src="./cardview_icon.png"
          style={{ width: "24px", height: "24px" }}
          className="hand-cursor"
        />
        <img
          src="./listview_icon.png"
          className="hand-cursor"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="works-container w-[100%] h-[70%] flex flex-row">
        <div className="flex flex-row gap-[1rem] flex-wrap w-[100%] items-start flex-3">
          {worksConfig.map((work, key) => {
            return (
              <Tooltip text={"Double click to open link"}>
                <a
                  key={key}
                  onDoubleClick={() => handleDoubleClickWork(work)}
                  href={work.link}
                  style={{
                    border:
                      work.name == selectedWork.name
                        ? "var(--border-stroke) dashed var(--border-color)"
                        : "",
                    borderRadius:
                      work.name == selectedWork.name
                        ? "var(--window-border-radius)"
                        : "",
                    padding: "4px",
                    width: "160px",
                  }}
                  className="flex flex-col justify-center items-center"
                  onClick={(e) => handleClickWork(e, work)}
                >
                  <img
                    src="./computer_icon.svg"
                    style={{
                      height: "80px",
                      width: "80px",
                    }}
                  />
                  <p style={{ fontSize: "10pt" }}>{work.name}</p>
                </a>
              </Tooltip>
            );
          })}
        </div>
        <div
          className="flex-2"
          style={{
            height: "100%",
            width: "100%",
            borderLeft: "var(--border-stroke) solid var(--border-color)",
            padding: "1rem",
          }}
        >
          <div
            style={{
              // border: "var(--border-stroke) solid var(--border-color)",
              // borderRadius: "var(--window-border-radius)",
              backgroundImage: `url(./images/${selectedWork.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "320px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Tooltip = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="absolute z-500 top-full left-1/2 -translate-x-1/2 mt-2 w-60 p-3">
          <p style={{ fontSize: "8pt" }}>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Works;
