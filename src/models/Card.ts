type CardStates = 'hidden' | 'shown' | 'guessed';

class Card {
  constructor(public cardId: number, public cardNumber: number, public state: CardStates = 'hidden') {}

  show(): void {
    this.state = 'shown';
  }

  hide(): void {
    this.state = 'hidden';
  }

  guess(): void {
    this.state = 'guessed';
  }
}

export default Card;
