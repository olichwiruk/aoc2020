const fs = require('fs')

function countContainingBags(myBag, input) {
  return 0
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  countContainingBags
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)
  const result = countContainingBags(myBag, input)
  console.log(result)
}
