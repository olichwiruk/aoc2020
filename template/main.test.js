const { parseInput } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = true

  expect(false).toBe(result);
})
