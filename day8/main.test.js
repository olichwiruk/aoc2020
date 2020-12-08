const { parseInput, lastAccaumulator } = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 5

  expect(lastAccaumulator(input)).toBe(result);
})
