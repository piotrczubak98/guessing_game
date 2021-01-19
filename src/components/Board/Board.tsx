import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../Card/Card';
import CardModel from '../../models/Card';
import { CardProps } from '../Card/Card.d';

import { handleCardClick } from '../../reducers/game';
import { RootState } from '../../utils/store';

import { StyledContainer } from './Board.styles';

const getCard = (card: CardModel, cardClick: (id: number) => void): JSX.Element => {
  let side: CardProps['side'] = 'back';
  const { state, cardId, cardNumber } = card;

  if (state === 'guessed') {
    return <div key={cardId} />;
  }

  if (state === 'shown') {
    side = 'front';
  }

  return <Card onClick={() => cardClick(cardId)} key={cardId} side={side} cardNumber={cardNumber} />;
};

const Board: FC = () => {
  const { cards, isGameFrozen, shownCard } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const cardClick = (id: number) => {
    const isMatch = shownCard?.cardId === id;

    if (!isGameFrozen && !isMatch) {
      dispatch(handleCardClick(id));
    }
  };

  return <StyledContainer>{cards.map((card) => getCard(card, cardClick))}</StyledContainer>;
};

export default Board;
