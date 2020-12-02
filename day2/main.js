const fs = require('fs')

function countValidPasswords(input) {
  return 0
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
  countValidPasswords
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = countValidPasswords(input)
  console.log(result)
}
