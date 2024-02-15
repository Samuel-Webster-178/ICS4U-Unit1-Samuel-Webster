/**

 * The program shows how to get input

 *   and deal with numbers.

 *

 * By:      Samuel Webster

 * Version: 1.0

 * Since:   2020-01-01

 */



import { createPrompt } from 'bun-promptx'

console.log('Choose the length of the logs you would like to move with a truck.')
const lengthString = createPrompt('Choose a maple log length from among 0.25m, 0.5m, and 1m: ')

const lengthNumber = parseInt(lengthString.value)

const logNumber = 55 / lengthNumber

console.log(`The truck can carry ${logNumber} that are ${lengthNumber} long.`)



console.log('\nDone.')
