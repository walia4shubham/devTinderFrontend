import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice' 
import feedReducer from './feedSlice' 
import requestConnectionReducer from './requestConnectionSlice'
import acceptedrequestreducer from './AcceptedConnections'
export const appStore = configureStore({
  reducer: { user: userReducer, feed: feedReducer  , requestConnetions: requestConnectionReducer, acceptedConnection : acceptedrequestreducer}
});