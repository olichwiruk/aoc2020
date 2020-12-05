const fs = require('fs')

function findFreeSeatId(input) {
  const seats = input.map(i => mapInputToSeat(i))
  const maxRow = Math.max(...seats.map(s => s.row))
  const maxCol = Math.max(...seats.map(s => s.col))
  const cols = [...Array(maxCol+1).keys()]

  const freeSeat = {}

  for (i = 2; i < maxRow - 1; i++) {
    const takenSeatsInRow = seats.filter(s => s.row == i)
    if (takenSeatsInRow.length != maxCol + 1) {
      freeSeat.row = i

      const takenCols = takenSeatsInRow.map(s => s.col)
      cols.forEach(col => {
        if (!takenCols.includes(col)) { freeSeat.col = col }
      })
    }
  }

  return calculateId(freeSeat.row, freeSeat.col)
}

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

  return { id: calculateId(row, col), row, col }
}

function calculateId(row, col) {
  return row * 8 + col
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
  const result = findFreeSeatId(input)
  console.log(result)
}
