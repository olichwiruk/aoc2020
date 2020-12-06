const { parseInput } = require('./main')

test('parser', () => {
  const filepath = `${__dirname}/input_test.txt`

  const result = [
    ['abc'], ['a', 'b', 'c'], ['ab', 'ac'], ['a', 'a', 'a', 'a'], ['b']
  ]

  expect(parseInput(filepath)).toStrictEqual(result);
})

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = true

  expect(false).toBe(result);
})
