import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import usersReducer from "../slices/usersSlice";


const rootReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
