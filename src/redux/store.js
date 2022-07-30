import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from "./slices/subject";
import mySubjectReducer from "./slices/mySubject";

export const store = configureStore({
  reducer: {
    subject: subjectReducer,
    mySub: mySubjectReducer,
  },
});
