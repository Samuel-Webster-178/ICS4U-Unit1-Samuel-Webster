/**

 * The program shows how to get input

 *   and deal with numbers.

 *

 * By:      Samuel Webster

 * Version: 1.0

 * Since:   2024-02-01

 */


import { createPrompt } from 'bun-promptx'

//input
console.log('Choose the length of the logs you would like to move with a truck.')
const lengthString = createPrompt('Choose a maple log length from among 0.25m, 0.5m, and 1m: ')

//process
const lengthNumber = parseFloat(lengthString.value)

const logNumber = (1100 / 20) / lengthNumber

//output
console.log(`The truck can carry ${logNumber} that are ${lengthNumber} long.`)



console.log('\nDone.')
