const fs = require('fs')

function countPositiveAnswears(input) {
  return 0
}

function parseInput(filepath) {
  const content = fs.readFileSync(filepath, 'utf8')
  const groups = content.substr(0, content.length-1).split('\n\n')
  const input = groups.map(group => group.split('\n'))

  return input
}

module.exports = {
  parseInput,
  countPositiveAnswears
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = true
  console.log(result)
}
