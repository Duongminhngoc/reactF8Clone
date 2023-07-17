import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import { Box, Container, Paper } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SliderImage from "../common/SliderImage";
import { useSelector } from "react-redux";
import {
  coursesProSelector,
  coursesFreeSelector,
  postsSelector,
} from "../../redux/selectors";
import CourseItem from "./courses/CourseItem";
import CourseFreeItem from "./courses/CourseFreeItem";
import PostItem from "./posts/PostItem";
import LinkButton from "../common/LinkButton";
const MainContent = () => {
  const classes = useStyles();
  const coursesPro = useSelector(coursesProSelector);
  const coursesFree = useSelector(coursesFreeSelector);
  const postsOutstanding = useSelector(postsSelector);

  return (
    <Box style={{ flexGrow: 1, margin: "10px 20px" }}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <SliderImage></SliderImage>
        </Grid>
      </Grid>
      <Grid mt={3} container spacing={3} style={{ padding: "0 50px" }}>
        <Grid item className={classes.title}>
          <Typography variant="h5" style={{ fontWeight: "700" }}>
            Khóa học pro
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ padding: "0 50px" }}>
        {coursesPro.map((course) => (
          <CourseItem key={course.id} course={course}></CourseItem>
        ))}
      </Grid>

      <Grid
        mt={3}
        container
        spacing={3}
        className={classes.title}
        style={{ padding: "0 50px" }}
      >
        <Grid item>
          <Typography
            variant="h5"
            style={{
              fontWeight: "700",
            }}
          >
            Khóa học miễn phí
          </Typography>
        </Grid>
        <Grid item>
          <LinkButton text="Xem lộ trình" url=""></LinkButton>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ padding: "0 50px" }}>
        {coursesFree.map((course) => (
          <CourseFreeItem key={course.id} course={course}></CourseFreeItem>
        ))}
      </Grid>

      <Grid
        mt={3}
        container
        spacing={3}
        className={classes.title}
        style={{ padding: "0 50px" }}
      >
        <Grid item>
          <Typography
            variant="h5"
            style={{
              fontWeight: "700",
            }}
          >
            Bài viết nổi bật
          </Typography>
        </Grid>
        <Grid item>
          <LinkButton text="Xem tất cả" url=""></LinkButton>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ padding: "0 50px" }}>
        {postsOutstanding.map((post) => (
          <PostItem key={post.id} post={post}></PostItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;
