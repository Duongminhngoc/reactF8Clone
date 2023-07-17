import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  leftMenuItem: {
    marginBottom: "15px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "red",
  },
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
    position: "relative",
    cursor: "pointer",
    width: "100%",
    height: "auto",
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: "15px",
    },
  },

  submitBtn: {
    margin: "auto",
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    opacity: 0,
    transform: "translateY(10px)",
    transition: "all 0.4s ease-out",
    "& button": {
      backgroundColor: "#fff",
      color: "black",
      borderRadius: "20px",
      border: 0,
      padding: "10px 20px",
      outline: "none",
      cursor: "pointer",
    },
  },

  showButton: {
    opacity: 1,
    transform: "translateY(0)",
  },
  bgImage: {
    color: "green",
    position: "relative",
    objectFit: "cover",
    overflow: "hidden",
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
    backgroundColor: "#181821",
    color: "#a9b3bb",
    minHeight: "350px",
    lineHeight: "1.5",
    padding: "60px 0 60px 0",
  },
}));

export default useStyles;
