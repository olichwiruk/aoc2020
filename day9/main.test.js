const { parseInput, firstWithoutSum } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)
  const preambleNumber = 5

  const result = 127

  expect(firstWithoutSum(input, preambleNumber)).toBe(result);
})
