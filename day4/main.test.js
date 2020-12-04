const { parseInput, countValidPassports, validate } = require('./main')

test('count valid passports', () => {
  const filepath = `${__dirname}/input_test.txt`
  const input = parseInput(filepath)

  const result = 2

  expect(countValidPassports(input)).toBe(result);
})

test('check valid passports', () => {
  const filepath = `${__dirname}/input_test_valid.txt`
  const input = parseInput(filepath)

  const result = 4

  expect(countValidPassports(input)).toBe(result);
})

test('check invalid passports', () => {
  const filepath = `${__dirname}/input_test_invalid.txt`
  const input = parseInput(filepath)

  const result = 0

  expect(countValidPassports(input)).toBe(result);
})

test('byr valid 2002', () => {
  expect(validate('byr', '2002')).toBe(true);
})

test('byr invalid 2003', () => {
  expect(validate('byr', '2003')).toBe(false);
})

test('hgt valid 60in', () => {
  expect(validate('hgt', '60in')).toBe(true);
})

test('hgt valid 190cm', () => {
  expect(validate('hgt', '190cm')).toBe(true);
})

test('hgt invalid 190in', () => {
  expect(validate('hgt', '190in')).toBe(false);
})

test('hgt invalid 190', () => {
  expect(validate('hgt', '190')).toBe(false);
})

test('hcl valid #123abc', () => {
  expect(validate('hcl', '#123abc')).toBe(true);
})

test('hcl invalid #123abz', () => {
  expect(validate('hcl', '#123abz')).toBe(false);
})

test('hcl invalid 123abc', () => {
  expect(validate('hcl', '123abc')).toBe(false);
})

test('ecl valid brn', () => {
  expect(validate('ecl', 'brn')).toBe(true);
})

test('ecl invalid wat', () => {
  expect(validate('ecl', 'wat')).toBe(false);
})

test('pid valid 000000001', () => {
  expect(validate('pid', '000000001')).toBe(true);
})

test('pid invalid 0123456789', () => {
  expect(validate('pid', '0123456789')).toBe(false);
})
