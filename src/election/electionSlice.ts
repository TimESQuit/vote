import { createSlice } from "@reduxjs/toolkit";

import { initialElectionData } from "./electionSetup";

export const electionSlice = createSlice({
  name: "election",
  initialState: { ...initialElectionData },
  reducers: {
    advanceStep: (state) => {
      if (
        state.eliminated.length + state.maxWinners ===
        state.choices.allIds.length
      ) {
        return;
      }
    },
  },
});

export const electionReducer = electionSlice.reducer;

const { actions } = electionSlice;

export const { advanceStep } = actions;
