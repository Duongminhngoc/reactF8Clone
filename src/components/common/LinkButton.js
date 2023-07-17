import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const LinkButton = ({ text, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="#"
        style={{
          display: "flex",
          color: "#f05123",
          fontWeight: "600",
          textDecoration: isHovered ? "underline" : "none",
        }}
      >
        {text}
        <KeyboardArrowRightIcon
          style={{
            transform: isHovered ? "translateX(3px)" : "translateX(-3px)",
            transition: "transform 0.2s ease-in-out",
          }}
          fontSize="medium"
        ></KeyboardArrowRightIcon>
      </a>
    </div>
  );
};

export default LinkButton;
