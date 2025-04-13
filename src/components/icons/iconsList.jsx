import React from "react";

const defaultIconSize = "48px";

export const FolderIcon = ({
  width = defaultIconSize,
  height = defaultIconSize,
  fill = "none",
  ...props
}) => (
  <BaseIcon>
    <svg
      viewBox="0 0 65 54"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      {...props}
    >
      <path
        d="M2 10H57C60.3137 10 63 12.6863 63 16V46C63 49.3137 60.3137 52 57 52H8C4.68629 52 2 49.3137 2 46V10Z"
        stroke="#753851"
        strokeWidth="4"
      />
      <path
        d="M31.8 10H2V2H22C26.8379 2 30.8734 5.43552 31.8 10Z"
        stroke="#753851"
        strokeWidth="4"
      />
    </svg>
  </BaseIcon>
);

const BaseIcon = ({ children }) => {
  return <div className="mx-[12px]">{children}</div>;
};

export default BaseIcon;
