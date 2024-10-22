import { sirasayi } from './index';

describe('Number conversion in Azerbaijani', () => {
  it('should append the correct suffix for 3, 4, and numbers ending in 00', () => {
    expect(sirasayi(3)).toBe('3-cü');
    expect(sirasayi(4)).toBe('4-cü');
    expect(sirasayi(300)).toBe('300-cü');
    expect(sirasayi(400)).toBe('400-cü');
    expect(sirasayi(3400)).toBe('3400-cü');
    expect(sirasayi(5200)).toBe('5200-cü');
  });

  it('should append the correct suffix for 6, 40, 60, and 90', () => {
    expect(sirasayi(6)).toBe('6-cı');
    expect(sirasayi(40)).toBe('40-cı');
    expect(sirasayi(60)).toBe('60-cı');
    expect(sirasayi(90)).toBe('90-cı');
    expect(sirasayi(123456)).toBe('123456-cı');
  });

  it('should append the correct suffix for 9, 10, 30, and 1000000', () => {
    expect(sirasayi(9)).toBe('9-cu');
    expect(sirasayi(10)).toBe('10-cu');
    expect(sirasayi(30)).toBe('30-cu');
    expect(sirasayi(1000000)).toBe('1000000-cu');
    expect(sirasayi(999)).toBe('999-cu');
  });

  it('should append the default suffix for other numbers', () => {
    expect(sirasayi(1)).toBe('1-ci');
    expect(sirasayi(5)).toBe('5-ci');
    expect(sirasayi(17)).toBe('17-ci');
  });
});