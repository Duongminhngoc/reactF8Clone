import React from "react";
import {
  AppBar,
  Avatar,
  Card,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./topMenuStyle.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px", //theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  borderRadius: "20px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "35ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));
const TopMenu = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="sx">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                alt="Lion"
                width="50"
                height="55"
                style={{ borderRadius: "12px" }}
              />
            </Typography>
            <Typography
              style={{ marginLeft: "10px" }}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              Học lập trình để làm gì
            </Typography>
          </Box>
          <Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Tìm kiếm khóa học, bài viết, video..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Button
            variant="contained"
            style={{ borderRadius: "20px", backgroundColor: "#f05123" }}
          >
            Đăng nhập
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopMenu;
