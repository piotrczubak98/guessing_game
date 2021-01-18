import React, { FC } from 'react';
import { Typography, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import Leaders from './Leaders/Leaders';
import { StyledTitleWrapper, StyledButtonWrapper } from './Leaderboard.styles';

const Leaderboard: FC = () => {
  const history = useHistory();

  return (
    <>
      <StyledTitleWrapper>
        <Typography.Title>Leaderboard</Typography.Title>
      </StyledTitleWrapper>
      <Leaders />
      <StyledButtonWrapper>
        <Button type="primary" size="large" block onClick={() => history.push('/')}>
          Go back
        </Button>
      </StyledButtonWrapper>
    </>
  );
};

export default Leaderboard;
