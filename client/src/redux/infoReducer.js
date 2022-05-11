import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    infos: [],
    isFetching: false,
    error: false,
  },
  // login user
  reducers: {
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
  },
});

// Action creators are generated for each case reducer function
export const { updateInfoFailure, updateInfoStart, updateInfoSuccess } =
  infoSlice.actions;

export default infoSlice.reducer;
