const fs = require('fs')

function fixedAccumulator(input) {
  return 0
}

function lastAccaumulator(input) {
  let accumulator = 0
  const checked = []

  let i = 0
  let stop = false
  while (i < input.length || stop) {
    if (checked.includes(i)) {
      stop = true
      break
    }

    const step = input[i]
    checked.push(i)
    switch (step.op) {
      case 'acc':
        if (step.sign == '+') { accumulator += step.value }
        else if (step.sign == '-') { accumulator -= step.value }
        i++
        break
      case 'jmp':
        if (step.sign == '+') { i += step.value }
        else if (step.sign == '-') { i -= step.value }
        break
      case 'nop':
        i++
        break
    }
  }

  return accumulator
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)

  return input.map(i => {
    const splitted = i.split(' ')
    const op = splitted[0]
    const sign = splitted[1].charAt(0)
    const value = Number(splitted[1].substr(1))

    return { op, sign, value }
  })
}

module.exports = {
  parseInput,
  lastAccaumulator,
  fixedAccumulator
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = fixedAccaumulator(input)
  console.log(result)
}
