import Card from './Card';
import IndexGenerator from './IndexGenerator';

class Board {
  public cards: Array<Card> = [];

  constructor(numberOfCards: number) {
    const indexGenerator = new IndexGenerator(numberOfCards / 2);

    for (let i = 0; i < numberOfCards; i += 1) {
      this.cards.push(new Card(i, indexGenerator.getUniqueId()));
    }
  }
}

export default Board;
