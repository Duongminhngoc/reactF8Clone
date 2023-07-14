import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
const FooterNav = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerNav}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Typography>
              Điện thoại: 0246.329.1102 Email: contact@fullstack.edu.vn Địa chỉ:
              Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Giới thiệu Liên hệ Điều khoản Bảo mật Cơ hội việc làm
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Game Nester Game CSS Diner Game CSS Selectors Game Froggy Game
              Froggy Pro Game Scoops
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              Mã số thuế: 0109922901 Ngày thành lập: 04/03/2022 Lĩnh vực: Công
              nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản
              phẩm mang lại giá trị cho cộng đồng.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterNav;
