import { electionSteps } from "./utils";

export interface IChoices {
  byId: {
    [key: string]: {
      id: number;
      name: string;
    };
  };
  allIds: string[];
}

export interface IVotes {
  byId: {
    [key: string]: {
      id: number;
      ranks: number[];
    };
  };
  allIds: string[];
}

export type ElectionStepKey = keyof typeof electionSteps;

export interface IElectionState {
  choices: IChoices;
  votes: IVotes;
  maxWinners: number;
  // Numbers in eliminated/winners refer to choice Ids.
  eliminated: number[] | [];
  winners: number[] | [];
  // Step to currently display in graph.
  currentStep: ElectionStepKey;
  // currentStep is added to stepHistory when election is advanced.
  stepHistory: ElectionStepKey[] | [];
}

export interface IVoteTotals {
  [idx: number]: {
    name: string;
    1: number;
    [idx: number]: number;
  };
}

export interface IChartDatum {
  // Obj represents votes for one choice where name is choice's name.
  // Number keys are vote rank with values being vote totals for that rank.
  name: string;
  [index: number]: number;
}
