const fs = require('fs')

function countValidPasswords(input, validateCallback) {
  let counter = 0
  input.forEach(el => { if (validateCallback(el)) { counter++ } })
  return counter
}

function newRulesValidate(el) {
  if (
    (letterMatch(el.password, el.range.min, el.letter) &&
    !letterMatch(el.password, el.range.max, el.letter)) ||
    (!letterMatch(el.password, el.range.min, el.letter) &&
    letterMatch(el.password, el.range.max, el.letter))
  ) {
    return true
  }
  return false
}

function oldRulesValidate(el) {
  const letterNumber = countLetters(el.password, el.letter)
  if (letterNumber >= el.range.min && letterNumber <= el.range.max) {
    return true
  }

  return false
}

function letterMatch(payload, index, letter) {
  return payload.charAt(index-1) == letter
}

function countLetters(payload, letter) {
  let counter = 0
  for (var i = 0; i < payload.length; i++) {
    if (payload.charAt(i) == letter) { counter++ }
  }
  return counter
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  const mappedInput = input.map(el => {
      const splited = el.split(' ')
      const [rangeMin, rangeMax] = splited[0].split('-')
      return {
        range: {
          min: Number(rangeMin),
          max: Number(rangeMax)
        },
        letter: splited[1].charAt(0),
        password: splited[2]
      }
    })
  return mappedInput
}

module.exports = {
  parseInput,
  countValidPasswords,
  oldRulesValidate,
  newRulesValidate
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = countValidPasswords(input, newRulesValidate)
  console.log(result)
}
