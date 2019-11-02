// Example of a VERY simple Monopoly game simulation
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10]

// refactoring previous code by class Player
class Player {
  // `constructor` is the method triggered with the `new` keyword 
  constructor(name,color){
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  // move method
  move() {
      let dice = 1 + Math.floor(6 * Math.random());
      this.position = (this.position + dice) % squares.length;
      this.cash += squares[this.position];
      if (this.cash < 0) {
        console.log(`Game over for ${this.name}.`);
      }
    }
  
    // displayInfo method
  displayInfo() {
      console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
    }
}


// initialize each players using Player class
let player1 = new Player('Joaquim', 'red')
let player2 = new Player('Maxence', 'blue')
let player3 = new Player('Mostafa', 'black')


// update the game
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