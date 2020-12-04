const fs = require('fs')

function countValidPassports(input) {
  return 0
}

function checkPassport(passport) {
  return false
}

function parseInput(filepath) {
  let input = fs.readFileSync(filepath, 'utf8').split('\n\n')
  return input.map(i => {
    const attributes = i.replace(/\n/g, ' ').split(' ')
    const mapped = {}
    attributes.forEach(attr => {
      splitted = attr.split(':')
      if (splitted[0].length == 0) { return }
      mapped[splitted[0]] = splitted[1]
    })

    return mapped
  })
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
