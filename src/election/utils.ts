import { RootState } from "../app/store";
import { IChartDatum } from "./types";

export const electionSteps = {
  0: { name: "CheckForWinner" },
  1: { name: "NoWinner" },
  2: { name: "IdentifyAndEliminateLowestChoice" },
  3: { name: "SplitVotes" },
  4: { name: "RedistributeVotes" },
  5: { name: "IdentifyandAddNewWinner" },
  6: { name: "CheckWinnersForOverShare" },
  7: { name: "IdentifyOvershareSplit" },
};

export const sortVoteData = (voteData: IChartDatum[], desc = true) => {
  const filterFunc = (x: string | number) => x === typeof Number;
  const reduceFunc = (acc: number, cur: number) => acc + cur;
  const sortFunc = (a: object, b: object) => {
    const aVals = Object.values(a).filter(filterFunc).reduce(reduceFunc, 0);
    const bVals = Object.values(b).filter(filterFunc).reduce(reduceFunc, 0);
    return desc ? bVals - aVals : aVals - bVals;
  };
  return voteData.sort(sortFunc);
};

export const evaluateNextElectionStep = (state: RootState) => {
  const { currentStep, stepHistory } = state.election;
  switch (currentStep) {
    case 0:
  }
};

export const checkForWinner = (state: RootState) => {};
