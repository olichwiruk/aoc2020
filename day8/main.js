const fs = require('fs')

function lastAccaumulator(input) {
  return 0
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  lastAccaumulator
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = lastAccaumulator(input)
  console.log(result)
}
