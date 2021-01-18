import React, { FC } from 'react';

// eslint-disable-next-line import/no-cycle
import { StyledCard, StyledContent, StyledFront, StyledBack, StyledLine } from './Card.styles';

import { CardProps } from './Card.d';

const Card: FC<CardProps> = ({ cardNumber, side = 'back', onClick }) => (
  <StyledCard onClick={onClick}>
    <StyledContent side={side}>
      <StyledFront>
        <StyledLine>{cardNumber}</StyledLine>
      </StyledFront>
      <StyledBack />
    </StyledContent>
  </StyledCard>
);

export default Card;
