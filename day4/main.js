const fs = require('fs')

function countValidPassports(input) {
  return 0
}

function checkPassport(passport) {
  return false
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  countValidPassports
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  console.log(input)
}
