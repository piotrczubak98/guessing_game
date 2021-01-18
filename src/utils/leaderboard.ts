import { Result } from '../types/Leaderboard';

const generateLeaderboard = (): Array<Result> => {
  const result: Array<Result> = [];

  for (let i = 9; i > 0; i -= 1) {
    result.push({
      username: `username_${i}`,
      score: i * 100,
    });
  }

  return result;
};

export default generateLeaderboard;
