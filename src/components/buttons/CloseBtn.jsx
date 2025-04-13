import React from "react";
import BaseButton from "./BaseButton";

const CloseButton = ({ styles = {}, ...props }) => {
  return (
    <BaseButton
      styles={{ ...styles, backgroundColor: "var(--red)" }}
      {...props}
    >
      <img src="./x_icon.png" />
    </BaseButton>
  );
};

export default CloseButton;
