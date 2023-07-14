import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    active: true,
    name: "Kiến Thức Nhập Môn IT",
    read: 1120,
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
  },
  {
    id: 2,
    active: true,
    name: "Lập trình C++ cơ bản, nâng cao",
    read: 80,
    bgImageUrl:
      "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png",
  },
  {
    id: 3,
    active: true,
    name: "HTML CSS từ Zero đến Hero",
    read: 124567,
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
  },
  {
    id: 4,
    active: true,
    name: "NodeJS Pro",
    read: 4221,
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
  },
  {
    id: 5,
    active: true,
    name: "Lập Trình JavaScript Cơ Bản",
    read: 343223,
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
  },
  {
    id: 6,
    active: true,
    name: "Lập Trình JavaScript Nâng Cao",
    read: 6754453,
    bgImageUrl: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
  },
];

const videosSlice = createSlice({
  name: "videosOutstanding",
  initialState: initialState,
  reducers: {},
});

export default videosSlice.reducer;
