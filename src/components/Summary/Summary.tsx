import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';

import { start } from '../../reducers/game.slice';
import { RootState } from '../../utils/store';

const CongratsModal = (): JSX.Element => {
  const dispatch = useDispatch();
  const { score, isWon, username, place } = useSelector((state: RootState) => ({
    score: state.score.value,
    isWon: state.game.state === 'won',
    username: state.user.name,
    place: state.leaderboard.currentPlace,
  }));

  const handleClick = () => {
    dispatch(start());
  };
  return (
    <Modal
      title={<h3>You won {username}!</h3>}
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
          You took <strong>{place}.</strong> place in the category <Link to="/leaderboard">check leaderboard</Link>.
        </p>
      ) : (
        <p>
          You did`t score enough to be in top 10. <Link to="/">Try again</Link>
        </p>
      )}
    </Modal>
  );
};

export default CongratsModal;
