import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";

const LeftNavItem = ({ id, activeId, name, icon, onClick }) => {
  const classes = useStyles();
  let IconComponent;
  switch (icon) {
    case "HomeRoundedIcon":
      IconComponent = HomeRoundedIcon;
      break;
    case "FlightTakeoffRoundedIcon":
      IconComponent = FlightTakeoffRoundedIcon;
      break;
    case "LightbulbRoundedIcon":
      IconComponent = LightbulbRoundedIcon;
      break;
    case "LibraryBooksRoundedIcon":
      IconComponent = LibraryBooksRoundedIcon;
      break;
    default:
      IconComponent = null;
  }
  const [isHovered, setIsHovered] = useState(false);
  const showBtn = () => {
    setIsHovered(true);
  };
  const hideBtn = () => {
    setIsHovered(false);
  };
  return (
    <a href="#" style={{ textDecoration: "none" }}>
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
        <IconComponent></IconComponent>
        <Typography variant="caption">{name}</Typography>
      </Paper>
    </a>
  );
};

export default LeftNavItem;
