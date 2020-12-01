const calculate = require('./main')

test('test 3 numbers', () => {
  const filepath = `${__dirname}/input_test.txt`
  const result = 241861950

  expect(calculate(filepath)).toBe(result);
})
