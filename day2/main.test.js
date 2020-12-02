const { parseInput, countValidPasswords } = require('./main')

test('count valid passwords', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 2

  expect(countValidPasswords(input)).toBe(result);
})
