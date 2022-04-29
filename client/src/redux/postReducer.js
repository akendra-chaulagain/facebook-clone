import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
      state.error = false;
    },
    getPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPostStart, getPostSuccess, getPostFailure } =
  postSlice.actions;

export default postSlice.reducer;
