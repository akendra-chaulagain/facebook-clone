import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  // get all post
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
    // create post
    createPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.push(action.payload);
      state.error = false;
    },
    createPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getPostStart,
  getPostSuccess,
  getPostFailure,
  createPostFailure,
  createPostSuccess,
  createPostStart,
} = postSlice.actions;

export default postSlice.reducer;
