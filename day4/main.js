const fs = require('fs')

function countValidPassports(input) {
  let counter = 0
  input.forEach(passport => {
    if (checkPassport(passport)) { counter++ }
  })
  return counter
}

function checkPassport(passport) {
  const requiredAttrs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
  const attrs = Object.keys(passport)
  for (var i = 0; i < requiredAttrs.length; i++) {
    if (!attrs.includes(requiredAttrs[i])) { return false }
  }
  return true
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
  const result = countValidPassports(input)
  console.log(result)
}
