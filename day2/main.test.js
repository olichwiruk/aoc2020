const { parseInput, countValidPasswords, countNewValidPasswords } = require('./main')

test('count valid passwords', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 2

  expect(countValidPasswords(input)).toBe(result);
})

test('count new valid passwords', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 1

  expect(countNewValidPasswords(input)).toBe(result);
})
