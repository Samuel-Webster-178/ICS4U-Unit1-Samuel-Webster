/*
* This is a program that calculates the area of a circle.
*
* @author  Samuel Webster
* @version 1.0
* @since   2024-01-01
*/

import { createPrompt } from 'bun-promptx'

const boardFoot = 144

function BoardFoot(width, height) {
  return (boardFoot / (width * height))
}

console.log(
  "Calculates the third dimmension for a board foot (144 cubic inches)"
)
const width = (parseFloat(createPrompt("Enter width (inches): ").value))
const height = (parseFloat(createPrompt("Enter height (inches): ").value))

if (isNaN(width) || isNaN(height)) {
  console.log("invalid input")
} else if (width > 0 && height > 0) {
  const length = BoardFoot(width, height)
  console.log(`The wood should be ${length} inches long.`)
} else {
  console.log("invalid input")
}

console.log("\nDone.")
