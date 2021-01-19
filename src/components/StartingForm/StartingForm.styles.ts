import styled from 'styled-components';
import { Card } from 'antd';
import { lighten } from 'polished';

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const StyledCard = styled(Card)`
  background-color: ${({ theme }) => lighten(0.3, theme.colors.cloudburst)};
`;
