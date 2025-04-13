import React, { useState } from "react";
import { skillsConfig } from "../../config";

const Skills = () => {
  const [tab, setTab] = useState("coding");
  return (
    <div className="window-content-container relative h-[90%]">
      <div className="flex flex-row gap-[6px] mb-[2rem]">
        {Object.keys(skillsConfig).map((key, i) => {
          return (
            <button
              key={i}
              className={
                tab == key
                  ? "skill-category border-(length:--border-stroke) p-[4px] bg-(--yellow)"
                  : "skill-category border-(length:--border-stroke) p-[4px]"
              }
              style={{
                borderRadius: "var(--window-border-radius)",
                padding: "12px",
              }}
              onClick={() => setTab(key)}
            >
              {key}
            </button>
          );
        })}
      </div>
      {skillsConfig[tab].map((skill, key) => {
        return (
          <div
            key={key}
            className="grid grid-cols-3 gap-4 items-center mb-[8px]"
          >
            <div>{skill.name}</div>
            <div
              className="col-span-2 grid grid-cols-10 border-(length:--border-stroke)"
              style={{
                borderRadius: "var(--window-border-radius)",
                padding: "4px",
              }}
            >
              {[...Array(skill.level)].map((_, i) => (
                <div
                  key={i}
                  className="h-[20px] bg-(--orange)"
                  style={{
                    borderRadius:
                      i == 9
                        ? "0 var(--window-border-radius) var(--window-border-radius) 0"
                        : i == 0
                        ? "var(--window-border-radius) 0 0 var(--window-border-radius)"
                        : "",
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
