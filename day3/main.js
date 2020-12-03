const fs = require('fs')

function countTrees(input, stepX, stepY) {
  let count = 0
  const width = input[0].length

  for (y = stepY; y < input.length; y++) {
    let x = stepX * y + 1
    while(x > width) { x = x - width }

    if (input[y].charAt(x-1) == "#"){
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
  countTrees
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = countTrees(input, 3, 1)
  console.log(result)
}
