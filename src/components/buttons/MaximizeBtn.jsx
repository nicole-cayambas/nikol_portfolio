import React from "react";
import BaseButton from "./BaseButton";

const MaximizeButton = ({ styles = {}, ...props }) => {
  return (
    <BaseButton
      styles={{ ...styles, backgroundColor: "var(--mint)" }}
      {...props}
    >
      <img src="./maximize_icon.png" />
    </BaseButton>
  );
};

export default MaximizeButton;
