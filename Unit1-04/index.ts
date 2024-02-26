/*
 * This is a program that calculates the area of a circle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

import { createSelection } from 'bun-promptx'

// input
const foodType = createSelection([
  { text: 'sub'},
  { text: 'pizza'},
  { text: 'soup'},
], {
  headerText: 'Choose a type of food',
})
const foodQuantity = createSelection([
  { text: 1},
  { text: 2},
  { text: 3},
], {
  headerText: 'Choose a quantity',
})
foodQuantity.selectedIndex += 1

// error checking
let time = 0
let food = ''
if (foodType.selectedIndex == 0) {
  time = 60
  food = 'sub'
} else if (foodType.selectedIndex == 1) {
  time = 45
  food = 'pizza'
} else if (foodType.selectedIndex == 2) {
  time = 105
  food = 'soup'
}

// process
// if 2 pizza, time = 45 * (2 + 1) / 2
// = 45 * 1.5
// = 67.5
// time = basetime + 50% * quantityInAdditionTo1
time = time * (foodQuantity.selectedIndex + 1) / 2
const minutes = Math.floor(time / 60)
const seconds = time % 60

// output
console.log(`${foodQuantity.selectedIndex} ${food}(s) take ${minutes} minutes and ${seconds} seconds to cook.`)

console.log("\nDone.")

