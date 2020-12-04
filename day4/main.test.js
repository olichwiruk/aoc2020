const { parseInput, countValidPassports } = require('./main')

test('count valid passports', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 2

  expect(countValidPassports(input)).toBe(result);
})

test('check valid passports', () => {
  const filepath = `${__dirname}/input_test_valid.txt`
  const input = parseInput(filepath)

  const result = 4

  expect(countValidPassports(input)).toBe(result);
})

test('check invalid passports', () => {
  const filepath = `${__dirname}/input_test_invalid.txt`
  const input = parseInput(filepath)

  const result = 0

  expect(countValidPassports(input)).toBe(result);
})
