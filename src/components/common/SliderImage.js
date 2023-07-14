import React from "react";
import Slider from "react-slick";
import { Box, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderImageStyle.css";
const useStyles = makeStyles(() => ({
  slideImage: {
    overflow: "hidden",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to right, #2daaed, #cccc)",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
  },
}));
const SliderImage = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // prevArrow: <button className="prev-arrow">Previous</button>,
    // nextArrow: <button className="next-arrow">Next</button>,
    customPaging: (i) => <div className="dot"></div>,
  };

  return (
    <Box>
      <Slider {...settings}>
        <Paper
          elevation={0}
          className={classes.slideImage}
          sx={{ borderRadius: "20px" }}
        >
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
            alt="Image 1"
          />
        </Paper>
        <Paper
          elevation={0}
          className={classes.slideImage}
          sx={{ borderRadius: "20px" }}
        >
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
            alt="Image 2"
          />
        </Paper>
        <Paper
          elevation={0}
          className={classes.slideImage}
          sx={{ borderRadius: "20px" }}
        >
          <img
            src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png"
            alt="Image 3"
          />
        </Paper>
      </Slider>
    </Box>
  );
};

export default SliderImage;
