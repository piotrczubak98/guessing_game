type CardStates = 'hidden' | 'shown' | 'guessed';

class Card {
  constructor(public cardId: number, public cardNumber: number, public state: CardStates = 'hidden') {}
}

export default Card;
