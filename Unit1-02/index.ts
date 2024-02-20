/*
 * This is a program that calculates the area of a circle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
 */

import { createPrompt } from 'bun-promptx'

// input
const mass = createPrompt("Enter the mass of your object (kg): ")
const speedOfLight = 299792458

// error checking
const massFloat = parseFloat(mass.value || "-1")
if (isNaN(massFloat) || massFloat < 0) {
  console.log("Invalid input.")
} else {
  // process
  const energy = massFloat * Math.pow(speedOfLight, 2)
  // output
  console.log(`The object with mass of ${massFloat} kg is comprised of ${energy.toFixed(3)} KJ.`)
}

console.log("\nDone.")
