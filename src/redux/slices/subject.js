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
    deleteSubject: (state, action) => {
      const newSubArry = state.subject.filter((_, index) => {
        return action.payload != index;
      });
      state.subject = newSubArry;
      console.log("hiii", newSubArry);
    },
  },
});

export const { addSubject, deleteSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
