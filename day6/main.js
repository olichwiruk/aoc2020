const fs = require('fs')

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = true
  console.log(result)
}
