import React from "react";

const BaseButton = ({ styles = {}, children, ...props }) => {
  return (
    <button
      style={{
        ...styles,
        border: "4px solid",
        borderRadius: "8px",
        borderColor: "var(--border-color)",
        width: "28px",
        height: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
