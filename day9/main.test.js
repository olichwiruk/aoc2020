const { parseInput, firstWithoutSum, findWeakness } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)
  const preambleNumber = 5

  const result = 127

  expect(firstWithoutSum(input, preambleNumber)).toBe(result);
})

test('test 2', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)
  const preambleNumber = 5

  const result = 62

  expect(findWeakness(input, preambleNumber)).toBe(result);
})
