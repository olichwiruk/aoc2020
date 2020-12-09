const fs = require('fs')

function firstWithoutSum(input, preamble) {
  return 0
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
