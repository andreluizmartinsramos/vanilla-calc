const func = require('../src/main');

test('Assert text', () => {
  expect(func(1)).toBe(1);
});
