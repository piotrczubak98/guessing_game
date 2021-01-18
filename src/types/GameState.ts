import Card from '../models/Card';

type GameStates = {
  cards: Array<Card>;
  shownCard: Card | null;
  isGameFrozen: boolean;
  state: 'won' | 'started' | null;
  pairsLeft: number;
};

export default GameStates;
