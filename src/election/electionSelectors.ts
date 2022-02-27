import { RootState } from "../app/store";
import { choiceSortFunc, getVoteData } from "./utils";
import { IChartDatum, IVoteTotals } from "./types";

export const selectData = (state: RootState) => {
  const choices = state.election.choices.byId;
  const votes = state.election.votes.byId;
  const eliminated = state.election.eliminated;

  return getVoteData(choices, votes, eliminated);
};

export const selectKeys = (state: RootState) => {
  const keys = [];
  const depth = state.election.eliminated.length + 1;
  for (let i = 0; i < depth; i++) keys.push(i + "");

  return keys;
};
