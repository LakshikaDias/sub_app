import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: ["sub 1", "sub 2", "sub 3"],
};

export const subjectSlice = createSlice({
  name: "subject",
  initialState: initialState,
  reducers: {
    addSubject: (state, actions) => {
      state.subject.push(actions.payload);
    },
  },
});

export const { addSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
