import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import dsaSlice from "../features/dsaSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    dsa: dsaSlice,
  },
});
