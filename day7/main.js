const fs = require('fs')

function countInsideBags(myBag, input, start = true) {
  let counter = 0

  const containing = input.find(bag => bag.name == myBag).contains
  if (containing.length == 0) { return 1 }

  containing.forEach(bag => {
    const numberOfBags = countInsideBags(bag.name, input, false)
    counter += bag.quantity * numberOfBags
  })

  if (start) { return counter }
  return counter + 1
}

function countEventualyContainingBags(myBag, input) {
  const currentBags = [myBag]
  const checkedBags = []

  do {
    const currentBag = currentBags.shift()

    containingBags(currentBag, input).forEach(bag => {
      if (!checkedBags.includes(bag.name)) {
        currentBags.push(bag.name)
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
  return containingBags
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
  countEventualyContainingBags,
  countInsideBags
}

module.exports.run = () => {
  const filepath = `${__dirname}/input.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)
  const result = countInsideBags(myBag, input)
  console.log(result)
}
