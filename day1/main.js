const fs = require('fs')

function calculate(numbers, target = 2020) {
  for (var i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i]
    if (numbers.includes(diff)) { return numbers[i] * diff }
  }
}

function calculate_3(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    const diff = 2020 - numbers[i]
    const rest = calculate(numbers, diff)
    if (rest) { return rest * numbers[i] }
  }
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n').map(el => Number(el))
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  calculate,
  calculate_3
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = calculate(input)
  console.log(result)
}
