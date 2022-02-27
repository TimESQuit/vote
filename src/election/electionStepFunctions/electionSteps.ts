/*
Intended possible orders of electionSteps:
0 -> 1/5
1 -> 2 -> 3 -> 4 -> 7 -> 8/9
5 -> 6 -> 7 -> 8/9
8 -> 0
9 -> 10 -> 4 -> 7 -> 8/9
*/
export const electionSteps = {
  0: { name: "CheckForNewWinner" },
  1: { name: "NoWinner" },
  2: { name: "IdentifyAndEliminateLowestChoice" },
  3: { name: "SplitVotes" },
  4: { name: "RedistributeVotes" },
  5: { name: "YesWinner" },
  6: { name: "IdentifyandAddNewWinner" },
  7: { name: "CheckWinnersForOverShare" },
  8: { name: "NoOverShare" },
  9: { name: "YesOverShare" },
  10: { name: "IdentifyOvershareSplit" },
};
