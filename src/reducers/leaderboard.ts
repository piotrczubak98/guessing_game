/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';
import generateLeaderboard from '../utils/leaderboard';

type Result = {
  username: string;
  score: number;
};

type Leaderboard = {
  results: Array<Result>;
  currentPlace: number | null;
};

const initialState: Leaderboard = {
  results: generateLeaderboard(),
  currentPlace: null,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addResult: (state, action: PayloadAction<{ result: Result }>) => {
      const { result } = action.payload;

      state.results.push(result);
      state.results.sort((a, b) => {
        return b.score - a.score;
      });

      state.currentPlace = state.results.indexOf(result) + 1;
    },
    deleteCurrentPlace: (state) => {
      state.currentPlace = null;
    },
  },
});

const { addResult, deleteCurrentPlace } = leaderboardSlice.actions;

const saveResult = (): AppThunk => (dispatch, getStore) => {
  const { user, leaderboard, game } = getStore();
  const { results } = leaderboard;

  if (game.score >= results[results.length - 1].score) {
    const result: Result = {
      score: game.score,
      username: user.name,
    };

    dispatch(addResult({ result }));
  } else {
    dispatch(deleteCurrentPlace());
  }
};

export default leaderboardSlice.reducer;
export { saveResult };
