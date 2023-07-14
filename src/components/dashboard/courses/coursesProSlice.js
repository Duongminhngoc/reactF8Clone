import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    active: true,
    name: "HTML CSS Pro",
    corePrice: 2499000,
    discountPrice: 1299000,
    bgImageUrl:
      "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
  },
  {
    id: 2,
    active: false,
    name: "JavaScript Pro",
    corePrice: "",
    discountPrice: "",
    bgImageUrl:
      "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
  },
  {
    id: 3,
    active: false,
    name: "NextJS Pro",
    corePrice: "",
    discountPrice: "",
    bgImageUrl:
      "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
  },
  {
    id: 4,
    active: false,
    name: "NodeJS Pro",
    corePrice: "",
    discountPrice: "",
    bgImageUrl:
      "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
  },
];

const coursesProSlice = createSlice({
  name: "coursesPro",
  initialState: initialState,
  reducers: {},
});

export default coursesProSlice.reducer;
