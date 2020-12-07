const fs = require('fs')

function countEventualyContainingBags(myBag, input) {
  const currentBags = [myBag]
  const checkedBags = []

  do {
    const currentBag = currentBags.shift()

    containingBags(currentBag, input).forEach(bag => {
      if (!checkedBags.includes(bag)) {
        currentBags.push(bag)
      }
    })

    checkedBags.push(currentBag)
  } while (currentBags.length != 0)

  return Array.from(new Set(checkedBags)).length - 1
}

function containingBags(myBag, input) {
  const containingBags = input.filter(bag => {
    return bag.contains.map(b => b.name).includes(myBag)
  })
  return containingBags.map(b => b.name)
}

function parseInput(filepath) {
  const input = fs.readFileSync(filepath, 'utf8').split('\n')
  input.splice(-1, 1)

  const mapped = input.map(i => {
    const splitted = i.split(' bags contain ')
    const name = splitted[0]
    const contains = splitted[1].split(', ').map(bag => {
      const s = bag.split(' ')
      const quantity = Number(s.shift())
      s.pop()
      const bagName = s.join(' ')
      return {
        name: bagName,
        quantity
      }
    }).filter(b => b.name != 'other')

    return { name, contains }
  })

  return mapped
}

module.exports = {
  parseInput,
  countEventualyContainingBags
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)
  const result = countEventualyContainingBags(myBag, input)
  console.log(result)
}
