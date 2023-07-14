import { configureStore } from "@reduxjs/toolkit";
import coursesProReducer from "../components/dashboard/courses/coursesProSlice";
import coursesFreeReducer from "../components/dashboard/courses/coursesFreeSlice";
import postsOutstandingReducer from "../components/dashboard/posts/postsSlice";
import videosOutstandingReducer from "../components/dashboard/videos/videosSlice";
const store = configureStore({
  reducer: {
    coursesPro: coursesProReducer,
    coursesFree: coursesFreeReducer,
    postsOutstanding: postsOutstandingReducer,
    videosOutstanding: videosOutstandingReducer,
  },
});

export default store;
