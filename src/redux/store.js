import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./slices/subject";

export const store = configureStore({
  reducer: {
    subject: subjectReducer,
  },
});
