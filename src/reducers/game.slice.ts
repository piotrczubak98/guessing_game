/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Board from '../models/Board';
import Card from '../models/Card';
import GameState from '../types/GameState';
import { addPointsForGuess, subtractPointsForMistake, resetScore } from './score.slice';
import { AppThunk } from '../utils/store';
import { saveResult } from './leaderboard.slice';

const initialState: GameState = {
  cards: [],
  shownCard: null,
  isGameFrozen: false,
  state: null,
  pairsLeft: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    init: (
      state,
      action: PayloadAction<{
        cards: Array<Card>;
      }>,
    ) => {
      const { cards } = action.payload;

      state.isGameFrozen = false;
      state.shownCard = null;
      state.cards = cards;
      state.state = 'started';
      state.pairsLeft = cards.length / 2;
    },
    setShownCard: (state, action: PayloadAction<number>) => {
      const cards = [...state.cards];

      cards[action.payload] = {
        ...state.cards[action.payload],
        state: 'shown',
      };

      return {
        ...state,
        cards,
        shownCard: cards[action.payload],
      };
    },
    showSecondCard: (state, action: PayloadAction<number>) => {
      const cards = [...state.cards];

      cards[action.payload] = {
        ...state.cards[action.payload],
        state: 'shown',
      };

      return {
        ...state,
        isGameFrozen: true,
        cards,
      };
    },
    onGuess: (state, action: PayloadAction<number>) => {
      state.cards[action.payload].state = 'guessed';

      if (state.shownCard) {
        state.cards[state.shownCard.cardId].state = 'guessed';
      }

      state.pairsLeft -= 1;
      state.shownCard = null;
      state.isGameFrozen = false;
    },
    onMistake: (state, action: PayloadAction<number>) => {
      state.cards[action.payload].state = 'hidden';

      if (state.shownCard) {
        state.cards[state.shownCard.cardId].state = 'hidden';
      }

      state.shownCard = null;
      state.isGameFrozen = false;
    },
    setGameAsWon: (state) => {
      state.state = 'won';
    },
    reset: (state) => {
      state.state = null;
    },
  },
});

const { init, showSecondCard, setShownCard, onGuess, onMistake, setGameAsWon, reset } = gameSlice.actions;

const start = (): AppThunk => (dispatch) => {
  const { cards } = new Board(16);

  dispatch(
    init({
      cards,
    }),
  );
  dispatch(resetScore());
};

const handleGameWon = (): AppThunk => (dispatch) => {
  dispatch(setGameAsWon());
  dispatch(saveResult());
};

const handleCardClick = (id: number): AppThunk => (dispatch, getState) => {
  const { shownCard, cards } = getState().game;
  const card = cards[id];

  if (!shownCard) {
    dispatch(setShownCard(id));
  } else {
    dispatch(showSecondCard(id));

    setTimeout(() => {
      if (shownCard.cardNumber === card.cardNumber) {
        dispatch(onGuess(id));
        dispatch(addPointsForGuess());
      } else {
        dispatch(onMistake(id));
        dispatch(subtractPointsForMistake());
      }

      const { pairsLeft } = getState().game;

      if (pairsLeft === 0) {
        dispatch(handleGameWon());
      }
    }, 1000);
  }
};

const resetGame = (): AppThunk => (dispatch) => {
  dispatch(reset());
};

export default gameSlice.reducer;
export { start, handleCardClick, resetGame };
