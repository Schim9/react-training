import { createSlice } from "@reduxjs/toolkit";

// On définit l'état initial
const initialState = {
    count: 0,
};

// On définit le reducer
export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload.value;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = 0;
        },
    },
});
// On exporte les actions
export const { increment, decrement, reset } = counter.actions;
// On exporte le reducer
export default counter.reducer



