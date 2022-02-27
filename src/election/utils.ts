import { RootState } from "../app/store";
import {
  ChoiceIdObj,
  choiceIds,
  IChartDatum,
  IVoteTotals,
  VoteIdObj,
} from "./types";

export const countChoiceRanks = (choice: IChartDatum) => {
  const ranks = Object.values(choice).filter((val) => val === typeof Number);
  return ranks.reduce((acc, cur) => acc + cur, 0) as number;
};

export const choiceSortFunc = (a: IChartDatum, b: IChartDatum, desc = true) => {
  const aVals = countChoiceRanks(a);
  const bVals = countChoiceRanks(b);
  return desc ? bVals - aVals : aVals - bVals;
};

export const getChoiceObj = (
  choiceIdObj: ChoiceIdObj,
  nameOrId: string | number
) => {
  if (typeof nameOrId === "string") {
    const choice = Object.values(choiceIdObj).find(
      ({ name }) => name === nameOrId
    );

    return choice;
  }

  const choice = Object.values(choiceIdObj).find(({ id }) => id === nameOrId);

  return choice;
};

export const getVoteData = (
  choiceIdObj: ChoiceIdObj,
  voteIdObj: VoteIdObj,
  eliminated: choiceIds
) => {
  const voteTotals: IVoteTotals = Object.values(choiceIdObj).reduce(
    (acc, cur) => {
      return {
        ...acc,
        [cur.id]: {
          name: cur.name,
          0: 0,
        },
      };
    },
    {}
  );

  for (const vote of Object.values(voteIdObj)) {
    // adds lowest indexed rank (highest preference) to voteTotals
    for (const [index, rank] of vote.ranks.entries()) {
      // if choice has been eliminated, move on to next rank
      if (rank in eliminated) continue;
      voteTotals[rank][index]++;
      // each vote is registered once
      break;
    }
  }

  return Object.values(voteTotals).sort(choiceSortFunc) as IChartDatum[];
};

export const minVotesNeeded = (maxWinners: number, totalVotes: number) => {
  return Math.floor((maxWinners + 1) / totalVotes) + 1;
};
