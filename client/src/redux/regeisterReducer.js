import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "createUser",
  initialState: {
    createUsers: [],
    isFetching: false,
    error: false,
  },
  // login user
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, actions) => {
      state.isFetching = false;
      state.createUsers = actions.payload;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { registerFailure, registerStart, registerSuccess } =
  registerSlice.actions;

export default registerSlice.reducer;
