import { configureStore, createSlice } from "@reduxjs/toolkit";
import { electionReducer } from "../election/electionSlice";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const store = configureStore({
  reducer: {
    election: electionReducer,
    counter: counterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
