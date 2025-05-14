import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navigation",
  initialState: {
    activeHash: "#home",
  },
  reducers: {
    setActiveHash: (state, action) => {
      state.activeHash = action.payload;
    },
  },
});

export const { setActiveHash } = navSlice.actions;
export default navSlice.reducer;
