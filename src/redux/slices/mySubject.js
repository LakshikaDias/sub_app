import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mySub: ["mysub 1", "mySub 2", "mySub 3"],
};

export const mySubSlice = createSlice({
  name: "mySub",
  initialState: initialState,
  reducers: {
    addMySubject: (state, action) => {
      state.mySub.push(action.payload);
    },
  },
});

export const { addMySubject } = mySubSlice.actions;

export default mySubSlice.reducer;
