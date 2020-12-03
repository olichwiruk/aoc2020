const { parseInput, countTrees } = require('./main')

test('count trees 3x1', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 7

  expect(countTrees(input)).toBe(result);
})
