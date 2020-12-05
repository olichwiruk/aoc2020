const { parseInput, calculateMaxId } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 820

  expect(calculateMaxId(input)).toBe(result);
})

