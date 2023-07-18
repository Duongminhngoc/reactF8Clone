import { Icon, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";

const LeftNavItem = ({ id, activeId, name, icon, onClick }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const showBtn = () => {
    setIsHovered(true);
  };
  const hideBtn = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <Paper
        onClick={onClick}
        onMouseOver={showBtn}
        onMouseLeave={hideBtn}
        style={{
          width: "75px",
          height: "75px",
          borderRadius: "15px",
          backgroundColor:
            activeId == id ? "#e5e5e5" : isHovered ? "#e5e5e5" : "",
        }}
        className={`${classes.leftMenuItem}`}
        elevation={0}
      >
        {typeof icon === "string" ? { icon } : icon}
        <Typography variant="caption">{name}</Typography>
      </Paper>
    </div>
  );
};

export default LeftNavItem;
