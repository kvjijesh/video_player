import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: "",
  },
  reducers: {
    setvideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setvideo } = videoSlice.actions;
export default videoSlice.reducer;