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
      const newDeleteSubArry = state.subject.filter((_, index) => {
        return action.payload != index;
      });
      state.subject = newDeleteSubArry;
      // console.log("hiii", newSubArry);
    },
    editSubject: (state, action) => {
      console.log("kkkkk", action.payload);
      const newEditSubArray = state.subject.map((sub, index) => {
        if (index == action.payload.index) {
          return action.payload.subject;
        } else {
          return sub;
        }
      });
      // console.log("heloo", newEditSubArray);
      state.subject = newEditSubArray;
    },
  },
});

export const { addSubject, deleteSubject, editSubject } = subjectSlice.actions;
export default subjectSlice.reducer;
