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
    const attr = requiredAttrs[i]
    if (!attrs.includes(attr)) { return false }
    if (!validate(attr, passport[attr])) { return false }
  }
  return true
}

function validate(attr, value) {
  switch (attr) {
    case 'byr':
      if (value.length != 4 || value < 1920 || value > 2002) { return false }
      break;
    case 'iyr':
      if (value.length != 4 || value < 2010 || value > 2020) { return false }
      break;
    case 'eyr':
      if (value.length != 4 || value < 2020 || value > 2030) { return false }
      break;
    case 'hgt':
      const type = value.substr(-2)
      const num = value.substring(0, value.length - 2)
      if (type == 'cm') {
        if (num < 150 || num > 193) {return false}
      } else if (type == 'in') {
        if (num < 59 || num > 76) {return false}
      } else { return false }
      break;
    case 'hcl':
      if (!value.match(/^#[0-9a-fA-F]{6}$/)) { return false }
      break;
    case 'ecl':
      const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
      if (!colors.includes(value)) { return false }
      break;
    case 'pid':
      if (!value.match(/^[0-9]{9}$/)) { return false }
      break;
  }
  return true;
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
  countValidPassports,
  validate
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = countValidPassports(input)
  console.log(result)
}
