const fs = require('fs')

function calculate(filepath) {
  const input = fs.readFileSync(filepath, 'utf8')
  const numbers = input.split('\n').map(el => Number(el))
  numbers.splice(-1, 1)

  let isPair = false
  const n = []
  for (var i = 0; i < numbers.length; i++) {
    n.push(numbers[i])
    for (var j = i; j < numbers.length; j++) {
      n.push(numbers[j])
      const difference = 2020 - n[0] - n[1]
      isPair = difference > 0 && numbers.includes(difference)

      if (isPair) {
        n.push(difference)
        break
      } else {
        n.splice(-1, 1)
      }
    }
    if (isPair) {
      break
    } else {
      n.splice(-1, 1)
    }
  }

  return n[0] * n[1] * n[2];
}
module.exports = calculate;

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const result = calculate(filepath)
  console.log(result)
}
