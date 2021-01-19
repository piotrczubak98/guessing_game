import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setName } from '../../../reducers/user';
import { RootState } from '../../../utils/store';

import { StartingForm } from '../../StartingForm/StartingForm';

import { StyledFormContainer, StyledImageContainer, StyledImage } from './Home.styles';

type HandleSubmitArgs = {
  username: string;
};

const Home: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => ({
    name: state.user.name,
  }));

  const handleSubmit = ({ username }: HandleSubmitArgs) => {
    dispatch(setName(username));

    history.push('/game');
  };

  return (
    <StyledFormContainer>
      <StyledImageContainer>
        <StyledImage src="/logo.png" alt="logo" />
      </StyledImageContainer>
      <StartingForm username={name} onSubmit={handleSubmit} />
    </StyledFormContainer>
  );
};

export default Home;
