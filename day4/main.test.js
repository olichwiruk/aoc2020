const { parseInput, countValidPassports } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 2

  expect(countValidPassports(input)).toBe(result);
})
