const fs = require('fs')

function calculateMaxId(input) {
  const seats = input.map(i => mapInputToSeat(i))
  return Math.max(...seats.map(s => s.id))
}

function mapInputToSeat(input) {
  const rowInput = input.substr(0, input.length-3)
  const colInput = input.substr(-3)
  const rowBin = rowInput.replace(/B/g, '1').replace(/F/g, '0')
  const colBin = colInput.replace(/R/g, '1').replace(/L/g, '0')
  const row = parseInt(rowBin, 2)
  const col = parseInt(colBin, 2)

  return { id: row * 8 + col, row, col }
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  calculateMaxId
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = calculateMaxId(input)
  console.log(result)
}
