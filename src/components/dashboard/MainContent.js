import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import { Box, Container, Paper } from "@material-ui/core";
import SliderImage from "../common/SliderImage";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useSelector } from "react-redux";
import {
  coursesProSelector,
  coursesFreeSelector,
  postsSelector,
} from "../../redux/selectors";
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
            Khóa học mới
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ padding: "0 50px" }}>
        {coursesPro.map((course) => (
          <Grid key={course.id} item xs={3}>
            <div className={classes.imageBg}>
              {course.active ? (
                <a href="#">
                  <img src={course.bgImageUrl} alt={course.name} />
                </a>
              ) : (
                <img src={course.bgImageUrl} alt={course.name} />
              )}
            </div>
            <div>
              <Typography className={classes.textOver}>
                {course.name}
              </Typography>
              {course.corePrice && (
                <Typography>{course.corePrice.toLocaleString()}đ</Typography>
              )}
              {course.disCountPrice && (
                <Typography>
                  {course.disCountPrice.toLocaleString()}đ
                </Typography>
              )}
            </div>
          </Grid>
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
          <a href="#">Xem lộ trình</a>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ padding: "0 50px" }}>
        {coursesFree.map((course) => (
          <Grid key={course.id} item xs={3}>
            <div className={classes.imageBg}>
              <a href="#">
                <img src={course.bgImageUrl} alt={course.name} />
              </a>
            </div>
            <div>
              <Typography className={classes.textOver}>
                {course.name}
              </Typography>
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
          <a href="#">Xem lộ trình</a>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ padding: "0 50px" }}>
        {postsOutstanding.map((post) => (
          <Grid key={post.id} item xs={3}>
            <div className={classes.imageBg}>
              <img src={post.bgImageUrl} alt={post.name} />
            </div>
            <div>
              <Typography className={classes.textOver}>{post.name}</Typography>
            </div>
            <div className={classes.postAuthor}>
              <div className={classes.postAuthorAvatar}>
                <img src={post.avatarUrl} alt={post.name} />
              </div>
              <Typography style={{ marginRight: "10px" }}>
                {post.nickname}
              </Typography>
              <Typography
                className={classes.courseFreeRead}
                style={{ fontSize: "15px" }}
              >
                6 phút trước
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;
