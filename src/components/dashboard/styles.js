import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textOver: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "15px",
  },
  link: {
    backgroundColor: "#e5e5e5",
    zIndex: "99",
    borderRadius: "10px",
    "& a": {
      textDecoration: "none",
    },
    "& a:hover": {
      backgroundColor: "#e5e5e5",
    },
  },
  gradientBackground: {
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  sliderImage: {
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  imageBg: {
    width: "100%",
    height: "auto",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: "5px",
    },
  },
  bgImage: {
    color: "green",
    position: "relative",
    objectFit: "cover",
    overflow: "hidden",
  },
  bgImage2: {
    position: "relative",
    paddingTop: "25.25%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(
        "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png"
      )`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  bgImage3: {
    position: "relative",
    paddingTop: "25.25%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(
        "https://files.fullstack.edu.vn/f8-prod/courses/7.png"
      )`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  courseFreeRead: {
    display: "flex",
    color: "gray",
  },
  postAuthor: {
    display: "flex",
  },
  postAuthorAvatar: {
    width: "25px",
    height: "25px",
    display: "flex",
    marginRight: "10px",
    "& img": {
      objectFit: "cover",
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: "25px",
    },
  },
  footerNav: {
    backgroundColor: "#121212",
    color: "#ccc",
    minHeight: "350px",
    padding: "60px 0 60px 0",
  },
}));

export default useStyles;
