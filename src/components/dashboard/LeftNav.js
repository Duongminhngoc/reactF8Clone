import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Paper, Typography } from "@mui/material";
import useStyles from "./styles";
import { Stack, display, maxWidth } from "@mui/system";
import listNav from "./listLeftNav";
import LeftNavItem from "./LeftNavItem";
const LeftNav = () => {
  const classes = useStyles();
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id) => {
    setActiveId(id);
  };
  return (
    <Box
      style={{
        paddingTop: "10px",
        marginLeft: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          marginBottom: "15px",
          height: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <a href="#">
          <AddCircleIcon
            color="primary"
            sx={{
              fontSize: 50,
            }}
          ></AddCircleIcon>
        </a>
      </Paper>
      {listNav.map((item) => (
        <LeftNavItem
          key={item.id}
          activeId={activeId}
          id={item.id}
          name={item.name}
          icon={item.iconComponent}
          onClick={() => handleClick(item.id)}
        ></LeftNavItem>
      ))}
    </Box>
  );
};

export default LeftNav;
