import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState = { value: 0 } as CounterState;

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: {
            reducer: (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            },
            prepare: (value: number): { payload: number } => {
                const payload = value ** 2;
                return {
                    payload,
                };
            },
        },
    },
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
