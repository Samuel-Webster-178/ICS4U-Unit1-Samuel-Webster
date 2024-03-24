/*
 * This is a program that calculates the area of a circle.
 *
 * @author  Samuel Webster
 * @version 1.0
 * @since   2024-01-01
*/

import { writeFileSync } from "fs"
import { readFileSync } from 'fs'

function generateGaussian(mean: number ,std: number) {
  // https://discourse.psychopy.org/t/javascript-gaussian-function/17724/2
  var _2PI = Math.PI * 2;
  var u1 = Math.random();
  var u2 = Math.random();
  
  var z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(_2PI * u2);
  var z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(_2PI * u2);

  return z0 * std + mean;
}

function distributeMarks(students: string[], assignments: string[]) {
  let marks: number[][] = []
  for (var i = 0; i < students.length; i++) {
    marks[i] = []
    for (var j = 0; j < assignments.length; j++) {
      marks[i][j] = generateGaussian(75, 10)
    }
  }
  return marks
}

let file = readFileSync(process.argv[2], 'utf8')

const students = file.split(/\r?\n/)
// pop EOF if empty
if (students[students.length - 1] == "") {
  students.pop()
}

file = readFileSync(process.argv[3], 'utf8')
const assignments = file.split(/\r?\n/)
// pop EOF if empty
if (assignments[assignments.length - 1] == "") {
  assignments.pop()
}

const marks: number[][] = distributeMarks(students, assignments)

let csvstring = "Name"
for (var i = 0; i < assignments.length; i++) {
  csvstring = csvstring + "," + assignments[i]
}
for (var i = 0; i < students.length; i++) {
  csvstring = csvstring + '\n' + students[i] + ","
  for (var j = 0; j < assignments.length; j++) {
    csvstring = csvstring + marks[i][j] + ","
  }
}

writeFileSync("Marks.csv", csvstring)
