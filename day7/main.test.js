const { parseInput, countContainingBags } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)

  const result = 4

  expect(countContainingBags(myBag, input)).toBe(result);
})
