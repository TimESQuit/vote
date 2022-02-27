import { electionSteps } from "./electionStepFunctions/electionSteps";

export type choiceId = number;
export type choiceIds = choiceId[] | [];

export interface ChoiceIdObj {
  [key: string]: {
    id: choiceId;
    name: string;
  };
}

export interface IChoices {
  byId: ChoiceIdObj;
  allIds: string[];
}

export type voteId = number;

export interface VoteIdObj {
  [key: string]: {
    id: voteId;
    ranks: number[];
  };
}

export interface IVotes {
  byId: VoteIdObj;
  allIds: string[];
}

export type ElectionStepKey = keyof typeof electionSteps;

export interface IElectionState {
  choices: IChoices;
  votes: IVotes;
  maxWinners: number;
  // Numbers in eliminated/winners refer to choice Ids.
  eliminated: choiceIds;
  winners: choiceIds;
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
