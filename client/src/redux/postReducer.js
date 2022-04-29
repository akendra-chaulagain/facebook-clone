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
    getPostSuccess: (state, actions) => {
      state.isFetching = false;
      state.posts = actions.payload;
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
