import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(
    "https://cricketcrease.com/wp-json/wp/v2/posts/?per_page=100"
  );
  return response.data;
});

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default postsSlice.reducer;
