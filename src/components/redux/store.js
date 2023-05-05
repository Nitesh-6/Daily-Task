import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";

let store = configureStore({ reducer: { todo: todoReducer } });

export default store;
