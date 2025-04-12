import React from "react";

const Textfield = () => {
  return (
    <div className="py-[4px] px-[8px] border-[4px] border-(--border-color) rounded-[12px] w-[340px] h-[40px]">
      <input
        type="text"
        placeholder="Search..."
        className="text-lg p-2 rounded-(--window-border-radius) w-full font-mono outline-none border-none bg-transparent"
      />
    </div>
  );
};

export default Textfield;
