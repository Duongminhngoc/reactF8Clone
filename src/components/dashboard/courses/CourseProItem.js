import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "../styles";

const CourseItem = ({ course }) => {
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
        {course.active ? (
          <a href="#">
            <img src={course.bgImageUrl} alt={course.name} />
          </a>
        ) : (
          <img src={course.bgImageUrl} alt={course.name} />
        )}
        <div
          className={`${classes.submitBtn} ${
            isHovered ? classes.showButton : ""
          }`}
        >
          {course.active && isHovered && <button>Xem khóa học</button>}
        </div>
      </div>
      <div>
        <Typography className={classes.textOver}>{course.name}</Typography>
        <div style={{ display: "flex", alignItems: "end" }}>
          {course.corePrice && (
            <Typography
              style={{
                textDecorationLine: "line-through",
                marginRight: "10px",
                fontSize: "15px",
              }}
            >
              {course.corePrice.toLocaleString()}đ
            </Typography>
          )}
          {course.discountPrice && (
            <Typography style={{ color: "#f05123", fontWeight: "600" }}>
              {course.discountPrice.toLocaleString()}đ
            </Typography>
          )}
        </div>
      </div>
    </Grid>
  );
};

export default CourseItem;
