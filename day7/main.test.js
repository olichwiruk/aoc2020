const { parseInput, countEventualyContainingBags, countInsideBags } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)

  const result = 4

  expect(countEventualyContainingBags(myBag, input)).toBe(result);
})

test('count bags inside 1', () => {
  const filepath = `${__dirname}/input_test.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)

  const result = 32

  expect(countInsideBags(myBag, input)).toBe(result);
})

test('count bags inside 2', () => {
  const filepath = `${__dirname}/input_test_2.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)

  const result = 126

  expect(countInsideBags(myBag, input)).toBe(result);
})
