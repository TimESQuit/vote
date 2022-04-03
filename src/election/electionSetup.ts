import { IElectionState } from "./types";

class Vote {
  static latestId: number;
  id: number;
  ranks: number[];

  constructor(ranks: number[]) {
    this.id = Vote.incrementId();
    this.ranks = ranks;
  }

  static incrementId() {
    if (!Vote.latestId) Vote.latestId = 0;
    Vote.latestId++;
    return Vote.latestId;
  }
}

const choices = ["chocolate", "vanilla", "strawberry"].map((c, i) => ({
  id: i + 1,
  name: c,
}));


const idStringTest = (id: number) => `choice-${id}`;
const choicesTest = ["bills", "steelers", "ravens"];
const allChoiceIdStringsTest = choicesTest.map((c, i ) => ({ id: idStringTest(i), name: c }))
const allChoicesObjTest = choicesTest.reduce((acc, cur, idx) => {
  return {
    ...acc,
    [idStringTest(idx)]: {
      id: idx,
      name: cur,
    }
  }
}, {})

const allChoiceIds: string[] = [];
const allChoices = choices.reduce((acc, cur) => {
  const idString = `choice-${cur.id}`;
  allChoiceIds.push(idString);
  return {
    ...acc,
    [idString]: {
      id: cur.id,
      name: cur.name,
    },
  };
}, {});

const CVS = [1, 2, 3];
const CSV = [1, 3, 2];
const VSC = [2, 3, 1];
const VCS = [2, 1, 3];
const SCV = [3, 1, 2];
const SVC = [3, 2, 1];

let chocolates: Vote[] = [];
for (let i = 0; i < 25; i++) chocolates.push(new Vote([...CVS]));
for (let i = 0; i < 10; i++) chocolates.push(new Vote([...CSV]));
for (let i = 0; i < 5; i++) chocolates.push(new Vote([1]));

let vanillas: Vote[] = [];
for (let i = 0; i < 20; i++) vanillas.push(new Vote([...VCS]));
for (let i = 0; i < 12; i++) vanillas.push(new Vote([...VSC]));
for (let i = 0; i < 3; i++) vanillas.push(new Vote([2]));

let straws: Vote[] = [];
for (let i = 0; i < 15; i++) straws.push(new Vote([...SCV]));
for (let i = 0; i < 7; i++) straws.push(new Vote([...SVC]));
for (let i = 0; i < 3; i++) straws.push(new Vote([3]));

const allVoteIds: string[] = [];
const allVotes = [...chocolates, ...vanillas, ...straws].reduce((acc, cur) => {
  const idString = `voter${cur.id}`;
  allVoteIds.push(idString);
  return {
    ...acc,
    [idString]: {
      id: cur.id,
      ranks: cur.ranks,
    },
  };
}, {});

const initialElectionData: IElectionState = {
  choices: {
    byId: allChoices,
    allIds: allChoiceIds,
  },
  votes: {
    byId: allVotes,
    allIds: allVoteIds,
  },
  maxWinners: 1,
  eliminated: [],
  winners: [],
  currentStep: 0,
  stepHistory: [],
};

export { initialElectionData };
