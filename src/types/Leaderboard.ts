type Result = {
  username: string;
  score: number;
};

type Leaderboard = {
  results: Array<Result>;
  currentPlace: number | null;
};

export default Leaderboard;
export type { Result };
