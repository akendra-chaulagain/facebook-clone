import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    infos: [],
    isFetching: false,
    error: false,
    isLoading: false,
  },
  // login user
  reducers: {
    // create info
    createInfoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createInfoSuccess: (state, action) => {
      state.isFetching = false;
      state.infos = action.payload;
    },
    createInfoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // update user
    updateInfoStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateInfoSuccess: (state, action) => {
      state.isFetching = false;
      state.infos[
        state.infos.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.info;
    },
    updateInfoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // get userInfo
    getUserInfoStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.isLoading = true;
    },
    getUserInfoSuccess: (state, actions) => {
      state.isFetching = false;
      state.infos = actions.payload;
      state.error = false;
      state.isLoading = false;
    },
    getUserInfoFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateInfoFailure,
  updateInfoStart,
  updateInfoSuccess,
  getUserInfoFailure,
  getUserInfoStart,
  getUserInfoSuccess,
  createInfoFailure,
  createInfoStart,
  createInfoSuccess,
} = infoSlice.actions;

export default infoSlice.reducer;
