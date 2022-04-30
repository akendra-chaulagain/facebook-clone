import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
    isLoading: false,
  },
  reducers: {
    // get all post
    getPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    getPostSuccess: (state, actions) => {
      state.isFetching = false;
      state.posts = actions.payload;
      state.error = false;
      state.isLoading = false;
    },
    getPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
    },
    // create post
    createPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    createPostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts.push(action.payload);
      state.error = false;
      state.isLoading = false;
    },
    createPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
    },
    // update post
    updatePostStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    updatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.posts[
        state.posts.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.post;
      state.error = false;
      state.isLoading = false;
    },
    updatePostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
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
  updatePostFailure,
  updatePostStart,
  updatePostSuccess,
} = postSlice.actions;

export default postSlice.reducer;
