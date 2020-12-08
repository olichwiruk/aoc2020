const fs = require('fs')

function fixedAccumulator(input) {
  const firstRun = runProgram(input)

  let success = firstRun.success
  const nops = firstRun.checked.nop
  const jmps = firstRun.checked.jmp
  let result
  while (!success) {
    const runInput = JSON.parse(JSON.stringify(input))
    if (nops.length > 0) {
      runInput[nops.pop()].op = 'jmp'
    } else if (jmps.length > 0) {
      runInput[jmps.pop()].op = 'nop'
    }
    result = runProgram(runInput)

    success = result.success
  }

  return result.accumulator
}

function lastAccumulator(input) {
  return runProgram(input).accumulator
}

function runProgram(input) {
  let accumulator = 0
  const checked = []
  const checkedNops = []
  const checkedJmps = []

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
        checkedJmps.push(i)
        if (step.sign == '+') { i += step.value }
        else if (step.sign == '-') { i -= step.value }
        break
      case 'nop':
        checkedNops.push(i)
        i++
        break
    }
  }

  return {
    success: !stop,
    checked: {
      nop: checkedNops,
      jmp: checkedJmps
    },
    accumulator
  }
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
  lastAccumulator,
  fixedAccumulator
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = fixedAccumulator(input)
  console.log(result)
}
