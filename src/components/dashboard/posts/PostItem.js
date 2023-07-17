import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import useStyles from "../styles";
const PostItem = ({ post }) => {
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
        <img src={post.bgImageUrl} alt={post.name} />
        <div
          className={`${classes.submitBtn} ${
            isHovered ? classes.showButton : ""
          }`}
        >
          {isHovered && <button>Xem khóa học</button>}
        </div>
      </div>
      <div>
        <Typography className={classes.textOver}>{post.name}</Typography>
      </div>
      <div className={classes.postAuthor}>
        <div className={classes.postAuthorAvatar}>
          <img src={post.avatarUrl} alt={post.name} />
        </div>
        <Typography style={{ marginRight: "10px" }}>{post.nickname}</Typography>
        <Typography
          className={classes.courseFreeRead}
          style={{ fontSize: "15px" }}
        >
          6 phút trước
        </Typography>
      </div>
    </Grid>
  );
};

export default PostItem;
