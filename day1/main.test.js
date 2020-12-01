const { parseInput, calculate, calculate_3 } = require('./main')

test('test 2 numbers', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 514579

  expect(calculate(input)).toBe(result);
})

test('test 3 numbers', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 241861950

  expect(calculate_3(input)).toBe(result);
})
