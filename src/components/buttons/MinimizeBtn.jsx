import React from "react";
import BaseButton from "./BaseButton";

const MinimizeButton = ({ styles = {}, ...props }) => {
  return (
    <BaseButton
      styles={{
        ...styles,
        backgroundColor: "var(--yellow)",
      }}
      {...props}
    >
      <img src="./minimize_icon.png" />
    </BaseButton>
  );
};

export default MinimizeButton;
