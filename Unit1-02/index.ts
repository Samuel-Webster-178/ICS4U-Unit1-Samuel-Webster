/*
 * This is a program that calculates the area of a circle.
 *
 * @author  Mr Coxall
 * @version 1.0
 * @since   2020-01-01
 */

import { createPrompt } from 'bun-promptx'

// input
const radiusOfCircleString = createPrompt("Enter the radius of a circle (mm): ")

// error checking
const radiusOfCircle = parseFloat(radiusOfCircleString.value || "-1")
if (isNaN(radiusOfCircle) == true || radiusOfCircle < 0) {
  console.log("Invalid input.")
} else {
  // process
  const areaOfCircle = Math.PI * Math.pow(radiusOfCircle, 2)
  // output
  console.log(`The area of a circle with a radius of ${radiusOfCircle} mm is ${areaOfCircle.toFixed(3)} mm².`)
}

console.log("\nDone.")
