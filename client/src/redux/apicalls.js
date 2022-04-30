import axios from "axios";
import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  getPostFailure,
  getPostStart,
  getPostSuccess,
} from "./postReducer";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";

// login user
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res);
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
  } catch (error) {
    dispatch(createPostFailure());
    console.log("unable to get create  posts");
  }
};
