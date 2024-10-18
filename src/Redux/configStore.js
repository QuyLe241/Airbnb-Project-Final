import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    authSlice,
  },
});
