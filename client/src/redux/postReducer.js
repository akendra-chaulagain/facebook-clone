import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
    isLoading: false,
  },
  // get all post
  reducers: {
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
