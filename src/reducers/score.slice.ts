/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const rules = {
  guess: 100,
  miss: -10,
};

type Score = {
  value: number;
};

const initialState: Score = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    addPointsForGuess: (state) => {
      state.value += rules.guess;
    },
    subtractPointsForMistake: (state) => {
      state.value += rules.miss;
    },
    resetScore: (state) => {
      state.value = 0;
    },
  },
});

const { addPointsForGuess, resetScore, subtractPointsForMistake } = scoreSlice.actions;

export default scoreSlice.reducer;
export { addPointsForGuess, resetScore, subtractPointsForMistake };
