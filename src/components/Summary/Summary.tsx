import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';

import { start } from '../../reducers/game.slice';
import { RootState } from '../../utils/store';

const Summary: FC = () => {
  const dispatch = useDispatch();

  const { score, isWon, username, place } = useSelector((state: RootState) => ({
    score: state.score.value,
    place: state.leaderboard.currentPlace,
    isWon: state.game.state === 'won',
    username: state.user.name,
  }));

  const handleClick = () => {
    dispatch(start());
  };

  return (
    <Modal
      title={<h3>Contgratulations {username}!</h3>}
      visible={isWon}
      closable={false}
      footer={[
        <Button type="primary" onClick={handleClick} key="1">
          Play again
        </Button>,
      ]}
    >
      <p>Your score: {score}</p>
      {place ? (
        <p>
          You took <strong>{place}.</strong> place - <Link to="/leaderboard">Check leaderboard</Link>.
        </p>
      ) : (
        <p>You did`t score enough to be in top 10.</p>
      )}
    </Modal>
  );
};

export default Summary;
