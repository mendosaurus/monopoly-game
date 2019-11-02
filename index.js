// square array
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10]

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  move: function() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: function() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000,
  move: function() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: function() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000,
  move: function() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: function() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

function upDate(){
  // --- Turn  ---
  player1.move();
  player2.move();
  player3.move();
  
  // --- Display info  ---
  player1.displayInfo();
  player2.displayInfo();
  player3.displayInfo();
}

upDate()