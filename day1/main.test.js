const calculate = require('./main')

test('test', () => {
  const filepath = `${__dirname}/input_test.txt`
  const result = 514579

  expect(calculate(filepath)).toBe(result);
})
