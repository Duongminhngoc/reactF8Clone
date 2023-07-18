import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  div2: {
    marginTop: "20px",
    "@media (min-width: 768px)": {
      marginLeft: "20px",
      marginTop: "0px",
    },
  },

  btn1: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "20px",
    backgroundColor: "rgb(240, 81, 35)",
    color: "#fff",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },

  btn2: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "2px #292929 solid",
    borderRadius: "20px",
    color: "#292929",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  imgIdea: {
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
}));

export default useStyles;
