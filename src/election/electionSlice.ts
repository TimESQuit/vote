import { createSlice } from "@reduxjs/toolkit";

import { initialElectionData } from "./electionSetup";
import { checkForNewWinner } from "./electionStepFunctions/checkForNewWinner";
import {
  getVoteData,
  getChoiceObj,
  minVotesNeeded,
  countChoiceRanks,
} from "./utils";

  export const electionSlice = createSlice({
  name: "election",
  initialState: { ...initialElectionData },
  reducers: {
    advanceStep: (state) => {
      // if (
      //   state.eliminated.length + state.maxWinners ===
      //   state.choices.allIds.length
      // ) {
      //   return;
      // }
      // const choices = state.choices.byId;
      // const votes = state.votes.byId;
      // const eliminated = state.eliminated;

      switch (state.currentStep) {
        case 0:
          /* Check For New Winner */
          const nonDeclaredWinnerChoices = getVoteData(
            state.choices.byId,
            state.votes.byId,
            state.eliminated
          ).filter((choice) => {
            const id = getChoiceObj(state.choices.byId, choice.name)
              ?.id as number;
            const winners: number[] = state.winners;
            return !winners.includes(id);
          });

          const totalVotes = state.votes.allIds.length;
          const voteThreshold = minVotesNeeded(state.maxWinners, totalVotes);
          const newWinners = nonDeclaredWinnerChoices
            .filter((choice) => countChoiceRanks(choice) >= voteThreshold)
            .map((winner) => {
              const choiceObj = getChoiceObj(state.choices.byId, winner.name);
              return choiceObj?.id;
            });

          if (newWinners.length) {
            state.winners = [...state.winners, ...(newWinners as number[])];
            state.currentStep = 5;
          } else {
            state.currentStep = 1;
          }
      }
    },
  },
});

export const electionReducer = electionSlice.reducer;

const { actions } = electionSlice;

export const { advanceStep } = actions;
