const fs = require('fs')
const { calculate } = require('../day1/main')

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
  firstWithoutSum
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = firstWithoutSum(input, 25)
  console.log(result)
}
