import { RootState } from "../../app/store";
import { IChartDatum } from "../types";
import { checkForNewWinner } from "./checkForNewWinner";

// Good morning/afternoon Tim. I was thinking last night that this logic
// should probably go directly in the reducer in electionSlice.
// Each step will have it's own function(s), the result(s) of which should
// be concise enough to put in the reducer function.

export const nextElectionStep = (state: RootState) => {
  const { currentStep, stepHistory } = state.election;
  switch (currentStep) {
    case 0:
      state.election.currentStep = checkForNewWinner(state).length > 0 ? 5 : 1;
  }
};
