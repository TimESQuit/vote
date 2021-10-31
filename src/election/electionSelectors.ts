import { RootState } from "../app/store";
import { sortVoteData } from "./utils";
import { IVoteTotals } from "./types";

export const selectData = (state: RootState) => {
  const voteTotals: IVoteTotals = Object.values(
    state.election.choices.byId
  ).reduce((acc, cur) => {
    return {
      ...acc,
      [cur.id]: {
        name: cur.name,
        0: 0,
      },
    };
  }, {});

  for (const vote of Object.values(state.election.votes.byId)) {
    // adds lowest indexed rank (highest preference) to voteTotals
    for (const [index, rank] of vote.ranks.entries()) {
      // if choice has been eliminated, move on to next rank
      if (rank in state.election.eliminated) continue;
      voteTotals[rank][index]++;
      // each vote is registered once;
      break;
    }
  }
  return sortVoteData(Object.values(voteTotals));
};

export const selectKeys = (state: RootState) => {
  const keys = [];
  const depth = state.election.eliminated.length + 1;
  for (let i = 0; i < depth; i++) keys.push(i + "");
  return keys;
};
