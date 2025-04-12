import React, { useEffect, useState } from "react";
import { FolderIcon } from "./icons/iconsList";
import Textfield from "./fileds/Textfield";

export const TimeSection = () => {
  const [dateTime, setDateTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = dateTime.toLocaleTimeString(); // e.g. "3:15:42 PM"
  const date = dateTime.toLocaleDateString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return (
    <div className="text-center flex flex-col gap-[6px]">
      <div className="">{time}</div>
      <div className="">{date}</div>
    </div>
  );
};

const Taskbar = () => {
  return (
    <div className="app-taskbar flex flex-row items-center">
      <div className="flex flex-row items-center flex-1">
        <FolderIcon fill="var(--whitish)" />
        <FolderIcon fill="var(--orange)" />
        <FolderIcon fill="var(--mint)" />
        <FolderIcon fill="var(--light-pink)" />
      </div>
      <div className="flex flex-row items-center flex-4 justify-end">
        <Textfield />
      </div>
      <div className="flex flex-row items-center flex-1 justify-end pr-[8px]">
        <TimeSection />
      </div>
    </div>
  );
};

export default Taskbar;
