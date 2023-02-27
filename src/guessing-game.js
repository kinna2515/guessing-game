class GuessingGame {
    constructor() {}
 
    setRange(min, max) {
this.min = min +1;
this.max = max -1;
    }

    guess() {
return Math.ceil((this.min + this.max) / 2)
    }

    lower() {
this.max = this.guess() - 1
    }

    greater() {
        this.min = this.guess() + 1 
    }
}

module.exports = GuessingGame;
