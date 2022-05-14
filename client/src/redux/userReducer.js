import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    isFetching: false,
    error: false,
    isLoading: false,
  },
  // login user
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    loginSuccess: (state, actions) => {
      state.isFetching = false;
      state.currentUser = actions.payload;
      state.error = false;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
    },
    // update user
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, actions) => {
      state.isFetching = false;
      state.currentUser[
        state.currentUser.findIndex((item) => item._id === actions.payload.id)
      ] = actions.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // register user
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, actions) => {
      state.isFetching = false;
      state.currentUser = actions.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // logout user
    logOutStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    logOutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = localStorage.removeItem("persist:root");
      state.error = false;
    },
    logOutfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginFailure,
  loginStart,
  loginSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutfailure,
} = userSlice.actions;

export default userSlice.reducer;
