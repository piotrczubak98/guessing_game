import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import Game from './components/pages/Game/Game';
import Leaderboard from './components/pages/Leaderboard/Leaderboard';

// import config from './config';

// const { ROUTES } = config;

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route exact path="/leaderboard">
            <Leaderboard />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
