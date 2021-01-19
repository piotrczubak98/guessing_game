import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Board from '../../Board/Board';
import Summary from '../../Summary/Summary';

import { start, resetGame } from '../../../reducers/game';
import { RootState } from '../../../utils/store';

import { StyledBoardWrapper } from './Game.styles';

const Game: FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game.state);

  useEffect(() => {
    if (gameState === null) {
      dispatch(start());
    }
    return () => {
      dispatch(resetGame());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Summary />
      <StyledBoardWrapper>
        <Board />
      </StyledBoardWrapper>
    </>
  );
};

export default Game;
