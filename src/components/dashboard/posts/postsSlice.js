import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    active: true,
    name: "Tổng hợp các sản phẩm của học viên tại F8",
    avatarUrl:
      "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png",
    nickname: "Sơn Đặng",
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
  },
  {
    id: 2,
    active: false,
    name: "[Phần 1] Tạo dự án ReactJS với Webpack và xxx",
    avatarUrl:
      "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png",
    nickname: "Sơn Đặng",
    bgImageUrl:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/279/6153f692d366e.jpg",
  },
  {
    id: 3,
    active: true,
    name: "HTML CSS từ Zero đến Hero",
    avatarUrl:
      "https://files.fullstack.edu.vn/f8-prod/blog_posts/107/613a1f3685814.png",
    nickname: "Dương Ngọc",
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
  },
  {
    id: 4,
    active: false,
    name: "Tổng hợp tài liệu tự học tiếng anh cơ bản.",
    avatarUrl:
      "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png",
    nickname: "Sky pe",
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
  },
  {
    id: 5,
    active: true,
    name: "Học như thế nào là phù hợp ?",
    avatarUrl:
      "https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png",
    nickname: "Mông lung",
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
  },
];

const postsSlice = createSlice({
  name: "postsOutstanding",
  initialState: initialState,
  reducers: {},
});

export default postsSlice.reducer;
