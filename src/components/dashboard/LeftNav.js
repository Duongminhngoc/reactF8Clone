import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Paper, Typography } from "@mui/material";
import useStyles from "./styles";
import { Stack, maxWidth } from "@mui/system";
import listNav from "./listLeftNav";
import LeftNavItem from "./LeftNavItem";
const LeftNav = () => {
  const classes = useStyles();
  const [activeId, setActiveId] = useState(1);
  return (
    <Box style={{ paddingTop: "10px", marginLeft: "15px" }}>
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
              fontSize: 60,
            }}
          ></AddCircleIcon>
        </a>
      </Paper>
      {listNav.map((item) => (
        <LeftNavItem
          key={item.id}
          name={item.name}
          icon={item.iconComponent}
        ></LeftNavItem>
      ))}
    </Box>
  );
};

export default LeftNav;
