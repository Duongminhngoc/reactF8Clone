import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Paper, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
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
        flexDirection: "column",
        position: "fixed",
        marginTop: "70px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          marginBottom: "5px",
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
        <Link key={item.id} to={`${item.link}`}>
          <LeftNavItem
            activeId={activeId}
            id={item.id}
            name={item.name}
            icon={item.iconComponent}
            onClick={() => handleClick(item.id)}
          ></LeftNavItem>
        </Link>
      ))}
    </Box>
  );
};

export default LeftNav;
