class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.current = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.current = Math.floor((this.min + this.max) / 2);
    return this.current;
  }

  lower() {
    this.max = this.current - 1;
  }

  greater() {
    this.min = this.current + 1;
  }
}

module.exports = GuessingGame;
