type Numbers = Array<number>;

class IndexGenerator {
  private uniqueIds: Numbers = [];

  constructor(numberOfCards: number) {
    for (let i = 0; i < numberOfCards; i += 1) {
      this.uniqueIds.push(i);
    }
    this.uniqueIds = IndexGenerator.randomize(this.uniqueIds.concat(this.uniqueIds));
  }

  getUniqueId(): number {
    const id = this.uniqueIds.pop();
    if (id !== undefined) return id;
    throw Error('There are no ids!');
  }

  private static randomize = (numbers: Numbers) => {
    const tempArray = [...numbers];
    let { length } = numbers;
    let rndId = 0;

    while (length > 0) {
      rndId = Math.floor(Math.random() * length);
      length -= 1;

      [tempArray[length], tempArray[rndId]] = [tempArray[rndId], tempArray[length]];
    }

    return tempArray;
  };
}

export default IndexGenerator;
