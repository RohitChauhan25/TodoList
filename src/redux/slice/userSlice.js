// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
  },
  reducers: {
    LoginInUser: (state, actions) => {
      state.userInfo = actions.payload;
    },
    LogoutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { LoginInUser, LogoutUser } = userSlice.actions;

export default userSlice.reducer;
