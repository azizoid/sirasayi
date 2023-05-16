import index from './index';

describe('Number conversion in Azerbaijani', () => {
  it('should append the correct suffix for 3, 4, and numbers ending in 00', () => {
    expect(index(3)).toBe('3-cü');
    expect(index(4)).toBe('4-cü');
    expect(index(300)).toBe('300-cü');
    expect(index(400)).toBe('400-cü');
    expect(index(3400)).toBe('3400-cü');
    expect(index(5200)).toBe('5200-cü');
  });

  it('should append the correct suffix for 6, 40, 60, and 90', () => {
    expect(index(6)).toBe('6-cı');
    expect(index(40)).toBe('40-cı');
    expect(index(60)).toBe('60-cı');
    expect(index(90)).toBe('90-cı');
    expect(index(123456)).toBe('123456-cı');
  });

  it('should append the correct suffix for 9, 10, 30, and 1000000', () => {
    expect(index(9)).toBe('9-cu');
    expect(index(10)).toBe('10-cu');
    expect(index(30)).toBe('30-cu');
    expect(index(1000000)).toBe('1000000-cu');
    expect(index(999)).toBe('999-cu');
  });

  it('should append the default suffix for other numbers', () => {
    expect(index(1)).toBe('1-ci');
    expect(index(5)).toBe('5-ci');
    expect(index(17)).toBe('17-ci');
  });
});