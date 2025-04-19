import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

export const calcSlice = createSlice({
    name : "calc",
    initialState,
    reducers : {
        sum : (state, action) => {}
    }
})

export const {sum} = calcSlice.actions;

export default calcSlice.reducer;