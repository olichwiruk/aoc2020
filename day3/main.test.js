const { parseInput, countTrees, checkManySlopes } = require('./main')

test('count trees 3x1', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 7

  expect(countTrees(input, 3, 1)).toBe(result);
})

test('count trees 3x1 real input', () => {
  const filepath = `${__dirname}/input.txt`
  const input = parseInput(filepath)

  const result = 148

  expect(countTrees(input, 3, 1)).toBe(result);
})

test('count trees 7x1', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 4

  expect(countTrees(input, 7, 1)).toBe(result);
})

test('check many slopes', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)
  const slopes = [ [1, 1], [3, 1], [5, 1], [7, 1], [1, 2] ]

  const result = 336

  expect(checkManySlopes(input, slopes)).toBe(result);
})
