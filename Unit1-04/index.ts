/*
* This is a program that calculates the area of a circle.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-01-01
*/


import { createSelection } from 'bun-promptx'
let guess = { selectedIndex: -1, error: null } 
const dicerole = Math.floor(Math.random() * 6)
let guesses = 0

do {
  guess = createSelection([
    { text: 1},
    { text: 2},
    { text: 3},
    { text: 4},
    { text: 5},
    { text: 6},
  ], {
    headerText: 'Guess the dicerole',
  })
  guesses += 1
  if (guess.selectedIndex > dicerole) {
    console.log("Too high")
  } else if (guess.selectedIndex < dicerole) {
    console.log("Too low")
  }
} while (guess.selectedIndex != dicerole)

//output
console.log(`You successfully guessed the number ${dicerole+1} in ${guesses} tries!`)
console.log("\nDone.")
