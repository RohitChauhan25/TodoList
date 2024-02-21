// reducers.js
import { combineReducers } from "redux";
import userSlice from "../slice/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "../slice/loaderSlice";

const rootReducer = combineReducers({
  userReducer: userSlice,
  loaderReducer: loaderSlice, // Add your slice(s) here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
