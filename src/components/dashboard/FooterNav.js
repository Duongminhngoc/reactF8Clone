import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import useStyles from "./styles";
const FooterNav = () => {
  const classes = useStyles();
  const StyledTypography = styled(Typography)`
    font-size: 13px;
    line-height: 1.6;
  `;
  return (
    <Box className={classes.footerNav}>
      <Container style={{ display: "flex" }}>
        <div style={{ flex: 2, marginRight: "10px" }}>
          <Typography
            style={{ color: "#fff", marginBottom: "15px" }}
            variant="h6"
          >
            Học lập trình để làm gì?
          </Typography>
          <StyledTypography>
            Điện thoại:{" "}
            <a style={{ color: "#ccc" }} href="#">
              0246.329.1102
            </a>
          </StyledTypography>
          <StyledTypography>
            Email:{" "}
            <a style={{ color: "#ccc" }} href="#">
              contact@fullstack.edu.vn
            </a>
          </StyledTypography>
          <StyledTypography>
            Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP.
            Hà Nội
          </StyledTypography>
        </div>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <Typography style={{ color: "#fff" }} variant="h6">
            Về F8
          </Typography>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Giới thiệu
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Liên hệ
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Điều khoản
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Bảo mật
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Cơ hội việc làm
                </a>
              </StyledTypography>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <Typography style={{ color: "#fff" }} variant="h6">
            SẢN PHẨM
          </Typography>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Game Nester
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Game CSS Diner
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Game CSS Selectors
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Game Froggy
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Game Froggy Pro
                </a>
              </StyledTypography>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, marginRight: "10px" }}>
          <Typography style={{ color: "#fff" }} variant="h6">
            CÔNG CỤ
          </Typography>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Tạo CV xin việc
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Rút gọn liên kết
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Clip-path maker
                </a>
              </StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                <a href="#" style={{ color: "#ccc" }}>
                  Snippet generator
                </a>
              </StyledTypography>
            </li>
          </ul>
        </div>
        <div style={{ flex: 2 }}>
          <Typography style={{ color: "#fff" }} variant="h6">
            CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
          </Typography>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>Mã số thuế: 0109922901</StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>Ngày thành lập: 04/03/2022</StyledTypography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <StyledTypography>
                Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát
                triển những sản phẩm mang lại giá trị cho cộng đồng.
              </StyledTypography>
            </li>
          </ul>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>
          © 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam
        </Typography>
        <div>
          <a href="#">
            <YouTubeIcon
              fontSize="large"
              style={{
                borderRadius: "5px",
                backgroundColor: "#eb2c3b",
                color: "black",
                transform: "scale(0.8)",
              }}
            ></YouTubeIcon>
          </a>
          <a href="#">
            <FacebookIcon
              fontSize="large"
              style={{
                borderRadius: "5px",
                color: "#4867aa",
              }}
            ></FacebookIcon>
          </a>

          <a href="#">
            <TwitterIcon
              fontSize="large"
              variant="outline"
              style={{
                borderRadius: "5px",
                color: "#3498db",
              }}
            ></TwitterIcon>
          </a>
        </div>
      </Container>
    </Box>
  );
};

export default FooterNav;
