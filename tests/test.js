const num = require('../number');

test('Phone number', () => {
  const number = num.formatPhoneNumber('9891423333');
    expect(number).toBe('(989) 142-3333');
  });

test('Phone number-2', () => {
  const number = num.formatPhoneNumber('  9891423333   ');
    expect(number).toBe('(989) 142-3333');
  });
