const fs = require('fs')

function countEveryPositiveAnswears(input) {
  const groupsCounter = []
  input.forEach(group => {
    let counter = 0
    const firstAnswears = group[0].split('')
    firstAnswears.forEach(a => {
      if (group.every(answear => answear.includes(a))) {
        counter++
      }
    })

    groupsCounter.push(counter)
  })
  return groupsCounter.reduce((a, b) => a + b)
}

function countAnyPositiveAnswears(input) {
  const uniqueAnswears = input.map(group => uniquifyAnswears(group))
  return uniqueAnswears.map(a => a.length).reduce((a, b) => a + b)
}

function uniquifyAnswears(group) {
  return Array.from(new Set(group.join('')))
}

function parseInput(filepath) {
  const content = fs.readFileSync(filepath, 'utf8')
  const groups = content.substr(0, content.length-1).split('\n\n')
  const input = groups.map(group => group.split('\n'))

  return input
}

module.exports = {
  parseInput,
  countAnyPositiveAnswears,
  countEveryPositiveAnswears
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)
  const result = countEveryPositiveAnswears(input)
  console.log(result)
}
