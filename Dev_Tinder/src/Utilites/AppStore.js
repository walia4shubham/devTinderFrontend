import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice' 
import feedReducer from './feedSlice' 
export const appStore = configureStore({
  reducer: { user: userReducer, feed: feedReducer  }
});