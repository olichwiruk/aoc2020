const { parseInput, lastAccumulator, fixedAccumulator } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 5

  expect(lastAccumulator(input)).toBe(result);
})

test('test 2', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 8

  expect(fixedAccumulator(input)).toBe(result);
})
