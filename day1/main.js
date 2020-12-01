const fs = require('fs')

function calculate(filepath) {
  const input = fs.readFileSync(filepath, 'utf8')
  let n1, n2
  const numbers = input.split('\n').map(el => Number(el))

  for (var i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const difference = 2020 - num
    const isPair = numbers.includes(difference)
    if (isPair) {
      n1 = num
      n2 = difference
      break;
    }
  }

  return n1 * n2;
}
module.exports = calculate;
