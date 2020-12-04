const fs = require('fs')

function checkManySlopes(input, slopes) {
  const counts = []
  slopes.forEach(slope => {
    counts.push(countTrees(input, slope[0], slope[1]))
  })
  console.log(counts)
  return counts.reduce((a, b) => a * b)
}

function countTrees(input, stepX, stepY) {
  let count = 0
  const width = input[0].length

  for (y = stepY; y < input.length; y++) {
    let x = stepX * y + 1
    while(x > width) { x -= width }

    if (input[y].charAt(x - 1) == "#"){
      count++
    }
  }
  return count
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)
  return input
}

module.exports = {
  parseInput,
  countTrees,
  checkManySlopes
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const slopes = [ [1, 1], [3, 1], [5, 1], [7, 1], [1, 2] ]
  const result = checkManySlopes(input, slopes)
  console.log(result)
}
