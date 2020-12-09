const fs = require('fs')
const { calculate } = require('../day1/main')

function findWeakness(input, preambleNumber) {
  const num = firstWithoutSum(input, preambleNumber)

  let start = 0, sum = 0, i = 0
  do {
    sum += input[i]

    if (sum > num) {
      sum = 0
      start++
      i = start
    } else {
      i++
    }
  } while (sum != num)

  const sumArray = input.slice(start, i)

  return Math.min(...sumArray) + Math.max(...sumArray)
}

function firstWithoutSum(input, preambleNumber) {
  for (let i = preambleNumber; i < input.length; i++) {
    const n = input[i]
    if (!calculate(input.slice(i-preambleNumber, i), n)) { return n }
  }
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n').map(n => Number(n))
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  firstWithoutSum,
  findWeakness
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = findWeakness(input, 25)
  console.log(result)
}
