import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { mq } from '../../utils/media';

import { CardProps } from './Card.d';

export const StyledCard = styled.div`
  position: relative;
  width: 70px;
  height: 100px;
  perspective: 300px;
  cursor: pointer;

  ${mq.sm`
    width: 110px;
    height: 150px;
  `}
`;

export const StyledContent = styled.div<{ side: CardProps['side'] }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  box-shadow: 0 0 20px ${({ theme }) => lighten(0.5, theme.colors.black)};
  transform-style: preserve-3d;
  transition: transform ${({ theme }) => theme.animation.duration.normal};

  ${({ side }) =>
    side === 'back' &&
    css`
      transform: rotateX(180deg);
      transition: transform ${({ theme }) => theme.animation.duration.normal};
    `}
`;

export const StyledFront = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 58px;
  backface-visibility: hidden;
`;

export const StyledBack = styled(StyledFront)`
  background: url('/card_bg.jpg');
  background-size: contain;
  transform: rotateX(180deg);
`;

export const StyledLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 80%;
  font-size: 42px;
  border: 2px dotted ${({ theme }) => theme.colors.cloudburst};

  ${mq.sm`
    font-size: 72px;
  `}
`;
