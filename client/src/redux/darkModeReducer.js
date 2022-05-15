import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "dark",
  initialState: {
    darkMode: false,
  },
  // login user
  reducers: {
    // create info
    LIGHT: (state) => {
      state.darkMode = false;
    },
    DARK: (state) => {
      state.darkMode = true;
    },
    TOGGLE: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { LIGHT, DARK, TOGGLE } = darkModeSlice.actions;

export default darkModeSlice.reducer;
