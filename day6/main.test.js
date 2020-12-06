const { parseInput, countAnyPositiveAnswears } = require('./main')

test('parser', () => {
  const filepath = `${__dirname}/input_test.txt`

  const result = [
    ['abc'], ['a', 'b', 'c'], ['ab', 'ac'], ['a', 'a', 'a', 'a'], ['b']
  ]

  expect(parseInput(filepath)).toStrictEqual(result);
})

test('count any positive', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 11

  expect(countAnyPositiveAnswears(input)).toBe(result);
})
