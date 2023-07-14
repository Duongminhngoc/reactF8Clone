import { Paper, Typography } from "@mui/material";
import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";

const LeftNavItem = ({ name, icon }) => {
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
  return (
    <a href="#" style={{ textDecoration: "none" }}>
      <Paper
        elevation={0}
        sx={{
          marginBottom: "15px",
          height: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e5e5e5",
          borderRadius: "15px",
        }}
      >
        <IconComponent></IconComponent>
        <Typography variant="caption">{name}</Typography>
      </Paper>
    </a>
  );
};

export default LeftNavItem;
