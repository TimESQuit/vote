import { RootState } from "../../app/store";
import { IChartDatum, IElectionState } from "../types";
import { selectData } from "../electionSelectors";
import { countChoiceRanks, getChoiceObj } from "../utils";

export const checkForNewWinner = (state: RootState) => {
  // Filter out votes for already-declared winners
  // const nonDeclaredWinnerChoices = selectData(state).filter((choice) => {
  //   const id = getChoiceObj(state, choice.name)?.id as number;
  //   const winners = state.election.winners as number[];
  //   return !winners.includes(id);
  // });
  // const totalVotes = state.election.votes.allIds.length;
  // const minVotesNeeded =
  //   Math.floor((state.election.maxWinners + 1) / totalVotes) + 1;
  // return nonDeclaredWinnerChoices.filter(
  //   (choice) => countChoiceRanks(choice) >= minVotesNeeded
  // );
};
