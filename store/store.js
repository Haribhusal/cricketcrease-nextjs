import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import postsSlice from "./slices/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
  middleware: [thunk],
});
