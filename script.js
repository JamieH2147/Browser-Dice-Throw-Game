

let dice1 = Math.floor((Math.random() * 6) + 1);
let dice2 = Math.floor((Math.random() * 6) + 1);
console.log(dice1, dice2);

if (dice1 === 6 && dice2 === 6) {
  alert( `You rolled ${dice1} & ${dice2}! You win a top prize: a bear!`)
} else if (dice1 === dice2 && dice1 !==6 && dice2 !== 6) {
  alert(`You rolled ${dice1} & ${dice2}! You win three free throws!`)
} else if (dice1 % 2 == 0 || dice2 % 2 == 0) {
  alert(`You rolled ${dice1} & ${dice2}! You win one free throw!`)
} else {
  alert(`You rolled ${dice1} & ${dice2}! Sorry, you lose the game!`)
}
