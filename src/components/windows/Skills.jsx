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
            <div className="grid grid-cols-3 gap-4 place-items-center">
                {skillsConfig[tab].map((skill, key) => {
                    return (
                        <div
                            key={key}
                            className="mb-[8px]"
                        >
                            {/* <div>{skill.name}</div> */}
                            <img
                                src={`./${skill.logo ?? 'images/default.png'}`}
                                style={{ width: "128px", height: "auto" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
