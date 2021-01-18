/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Leaderboard, { Result } from '../types/Leaderboard';
import generateLeaderboard from '../utils/leaderboard';
// eslint-disable-next-line import/no-cycle
import { AppThunk } from '../utils/store';

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
      state.results.pop();

      state.currentPlace = state.results.indexOf(result) + 1;
    },
    deleteCurrentPlace: (state) => {
      state.currentPlace = null;
    },
  },
});

const { addResult, deleteCurrentPlace } = leaderboardSlice.actions;

const saveResult = (): AppThunk => (dispatch, getStore) => {
  const { user, leaderboard, score } = getStore();
  const { results } = leaderboard;

  if (score.value >= results[results.length - 1].score) {
    const result: Result = {
      score: score.value,
      username: user.name,
    };

    dispatch(addResult({ result }));
  } else {
    dispatch(deleteCurrentPlace());
  }
};

export default leaderboardSlice.reducer;
export { saveResult };
