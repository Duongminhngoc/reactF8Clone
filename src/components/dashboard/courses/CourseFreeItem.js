import { Grid, Typography } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import useStyles from "../styles";
import React, { useState } from "react";

const CourseFreeItem = ({ course }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const showBtn = () => {
    setIsHovered(true);
  };
  const hideBtn = () => {
    setIsHovered(false);
  };
  return (
    <Grid item xs={6} md={4} lg={3}>
      <div
        className={classes.imageBg}
        onMouseOver={showBtn}
        onMouseLeave={hideBtn}
      >
        <a href="#">
          <img src={course.bgImageUrl} alt={course.name} />
        </a>
        <div
          className={`${classes.submitBtn} ${
            isHovered ? classes.showButton : ""
          }`}
        >
          {isHovered && <button>Xem khóa học</button>}
        </div>
      </div>
      <div>
        <Typography className={classes.textOver}>{course.name}</Typography>
        <div className={classes.courseFreeRead}>
          <Diversity3Icon
            sx={{ fontSize: 20 }}
            style={{ marginRight: "5px" }}
          ></Diversity3Icon>
          <Typography style={{ fontSize: "15px" }}>
            {course.read.toLocaleString()}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default CourseFreeItem;
