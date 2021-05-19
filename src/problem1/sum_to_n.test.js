const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require('./sum_to_n.js');

describe("Sum to n functions", () => {
    test('where n = 5, result to equal 15', () => {
    expect(sum_to_n_a(5)).toBe(15);
    expect(sum_to_n_b(5)).toBe(15);
    expect(sum_to_n_c(5)).toBe(15);
  });
});