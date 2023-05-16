import { siraSayi } from './index';

describe('Number conversion in Azerbaijani', () => {
  it('should append the correct suffix for 3, 4, and numbers ending in 00', () => {
    expect(siraSayi(3)).toBe('3-cü');
    expect(siraSayi(4)).toBe('4-cü');
    expect(siraSayi(300)).toBe('300-cü');
    expect(siraSayi(400)).toBe('400-cü');
    expect(siraSayi(3400)).toBe('3400-cü');
    expect(siraSayi(5200)).toBe('5200-cü');
  });

  it('should append the correct suffix for 6, 40, 60, and 90', () => {
    expect(siraSayi(6)).toBe('6-cı');
    expect(siraSayi(40)).toBe('40-cı');
    expect(siraSayi(60)).toBe('60-cı');
    expect(siraSayi(90)).toBe('90-cı');
    expect(siraSayi(123456)).toBe('123456-cı');
  });

  it('should append the correct suffix for 9, 10, 30, and 1000000', () => {
    expect(siraSayi(9)).toBe('9-cu');
    expect(siraSayi(10)).toBe('10-cu');
    expect(siraSayi(30)).toBe('30-cu');
    expect(siraSayi(1000000)).toBe('1000000-cu');
    expect(siraSayi(999)).toBe('999-cu');
  });

  it('should append the default suffix for other numbers', () => {
    expect(siraSayi(1)).toBe('1-ci');
    expect(siraSayi(5)).toBe('5-ci');
    expect(siraSayi(17)).toBe('17-ci');
  });
});