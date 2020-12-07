const { parseInput, countEventualyContainingBags } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const myBag = 'shiny gold'
  const input = parseInput(filepath)

  const result = 4

  expect(countEventualyContainingBags(myBag, input)).toBe(result);
})
