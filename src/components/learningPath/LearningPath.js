import { Box, Container, Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { margin } from "@mui/system";
import useStyles from "./styles";
import React from "react";
import styled from "styled-components";

const Content1 = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content2 = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LearningRoute = () => {
  const classes = useStyles();
  return (
    <Box style={{ margin: "100px 100px 0 100px" }}>
      <Typography variant="h5" style={{ fontWeight: "600" }}>
        Lộ trình học
      </Typography>
      <Typography variant="body2">
        Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
        Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung
        vào lộ trình "Front-end".
      </Typography>
      <Content1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "#ccc 2px solid",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: "500px",
            }}
          >
            <div>
              <Typography variant="h6" style={{ fontWeight: "700" }}>
                Lộ trình học Front-end
              </Typography>
              <Typography variant="caption">
                Lập trình viên Front-end là người xây dựng ra giao diện
                websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở
                thành lập trình viên Front-end nhé.
              </Typography>
            </div>
            <div>
              <a href="#" style={{ paddingLeft: "15px" }}>
                <img
                  width={100}
                  style={{ border: "#f05123 4px solid", borderRadius: "100%" }}
                  src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                  alt="sss"
                />
              </a>
            </div>
          </div>
          <div>
            <button className={classes.btn1}>Xem chi tiết</button>
          </div>
        </div>
        <div
          className={classes.div2}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "#ccc 2px solid",
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: "500px",
            }}
          >
            <div>
              <Typography variant="h6" style={{ fontWeight: "700" }}>
                Lộ trình học Front-end
              </Typography>
              <Typography variant="caption">
                Lập trình viên Front-end là người xây dựng ra giao diện
                websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở
                thành lập trình viên Front-end nhé.
              </Typography>
            </div>
            <div>
              <a href="#" style={{ paddingLeft: "15px" }}>
                <img
                  width={100}
                  style={{ border: "#f05123 4px solid", borderRadius: "100%" }}
                  src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                  alt="sss"
                />
              </a>
            </div>
          </div>
          <div>
            <button className={classes.btn1}>Xem chi tiết</button>
          </div>
        </div>
      </Content1>
      <Content2>
        <div style={{ width: "400px" }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginBottom: "20px" }}
          >
            Tham gia cộng đồng học viên F8 trên Facebook
          </Typography>
          <Typography variant="caption">
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia
            hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
          </Typography>
          <button className={classes.btn2}>Tham gia nhóm</button>
        </div>
        <div className={classes.imgIdea}>
          <img
            width={400}
            src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png"
            alt="aaa"
          />
        </div>
      </Content2>
    </Box>
  );
};

export default LearningRoute;
