import axios from "axios";
import {
  updateInfoFailure,
  updateInfoStart,
  updateInfoSuccess,
} from "./infoReducer";
import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
  getPostFailure,
  getPostStart,
  getPostSuccess,
  updatePostFailure,
  updatePostStart,
  updatePostSuccess,
} from "./postReducer";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";

// login user
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    alert("login success");
  } catch (error) {
    dispatch(loginFailure());
    console.log("unable to login" + error);
  }
};

// get all post
export const getAllPost = async (dispatch) => {
  dispatch(getPostStart());
  try {
    const res = await axios.get("posts/all");
    dispatch(getPostSuccess(res.data));
  } catch (error) {
    dispatch(getPostFailure());
    console.log("unable to get all posts");
  }
};

// create post
export const createPost = async (post, dispatch) => {
  dispatch(createPostStart());
  try {
    const res = await axios.post("/posts/create", post);
    dispatch(createPostSuccess(res.data));
    alert("post created");
  } catch (error) {
    dispatch(createPostFailure());
    console.log("unable to get create  posts");
  }
};

// update post
export const updatePosts = async (id, data, dispatch) => {
  dispatch(updatePostStart());
  try {
    await axios.put(`/posts/${id}`, data);
    dispatch(updatePostSuccess(id, data));
    alert("update success...");
  } catch (error) {
    console.log("unable to update post" + error);
    dispatch(updatePostFailure());
  }
};

// delete posts
export const deletePosts = async (dispatch, id) => {
  dispatch(deletePostStart());
  try {
    await axios.delete(`/posts/${id}`);
    dispatch(deletePostSuccess());
  } catch (error) {
    console.log("unable to delete post" + error);
    dispatch(deletePostFailure());
  }
};

// update user info
export const updateInfoUser = async (path, dispatch, data) => {
  dispatch(updateInfoStart());
  try {
    await axios.put(`/info/${path}`, data);
    dispatch(updateInfoSuccess(path, data));
    alert("update success...");
  } catch (error) {
    console.log("unable to update user info" + error);
    dispatch(updateInfoFailure());
  }
};
