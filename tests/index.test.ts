import { sirasayi } from '../src/index';

describe("Number conversion in Azerbaijani", () => {
  it("should append the correct suffix for 3, 4, and numbers ending in 00", () => {
    expect(sirasayi(3)).toBe("3-cü");
    expect(sirasayi(4)).toBe("4-cü");
    expect(sirasayi(300)).toBe("300-cü");
    expect(sirasayi(400)).toBe("400-cü");
    expect(sirasayi(3400)).toBe("3400-cü");
    expect(sirasayi(5200)).toBe("5200-cü");
    expect(sirasayi(100)).toBe("100-cü");
    expect(sirasayi(5700)).toBe("5700-cü");
  });

  it("should append the correct suffix for 6, 40, 60, and 90", () => {
    expect(sirasayi(6)).toBe("6-cı");
    expect(sirasayi(40)).toBe("40-cı");
    expect(sirasayi(60)).toBe("60-cı");
    expect(sirasayi(90)).toBe("90-cı");
    expect(sirasayi(123456)).toBe("123456-cı");
    expect(sirasayi(456)).toBe("456-cı");
  });

  it("should append the correct suffix for 9, 10, 30, and special cases", () => {
    expect(sirasayi(9)).toBe("9-cu");
    expect(sirasayi(10)).toBe("10-cu");
    expect(sirasayi(30)).toBe("30-cu");
    expect(sirasayi(1000000)).toBe("1000000-cu");
    expect(sirasayi(999)).toBe("999-cu");
    expect(sirasayi(1010)).toBe("1010-cu");
  });

  it("should append the default suffix for other numbers", () => {
    expect(sirasayi(1)).toBe("1-ci");
    expect(sirasayi(5)).toBe("5-ci");
    expect(sirasayi(17)).toBe("17-ci");
    expect(sirasayi(98765)).toBe("98765-ci");
  });

  it("should correctly handle millions", () => {
    expect(sirasayi(1000000)).toBe("1000000-cu");
    expect(sirasayi(2000000)).toBe("2000000-cu");
    expect(sirasayi(5000000)).toBe("5000000-cu");
    expect(sirasayi(9000000)).toBe("9000000-cu");
  });

  it("should correctly handle various large numbers", () => {
    expect(sirasayi(100)).toBe("100-cü");
    expect(sirasayi(200)).toBe("200-cü");
    expect(sirasayi(100000)).toBe("100000-ci");
    expect(sirasayi(200000)).toBe("200000-ci");
    expect(sirasayi(300000)).toBe("300000-ci");
    expect(sirasayi(999999)).toBe("999999-cu");
  });

  it("should correctly handle random edge cases", () => {
    expect(sirasayi(777777)).toBe("777777-ci");
    expect(sirasayi(888888)).toBe("888888-ci");
    expect(sirasayi(444444)).toBe("444444-cü");
    expect(sirasayi(666666)).toBe("666666-cı");
    expect(sirasayi(999999)).toBe("999999-cu");
  });

  it("should correctly handle numbers ending in 10", () => {
    expect(sirasayi(10)).toBe("10-cu");
    expect(sirasayi(1010)).toBe("1010-cu");
    expect(sirasayi(2010)).toBe("2010-cu");
    expect(sirasayi(3010)).toBe("3010-cu");
    expect(sirasayi(4010)).toBe("4010-cu");
  });

  it("should correctly handle hundreds of thousands", () => {
    expect(sirasayi(100000)).toBe("100000-ci");
    expect(sirasayi(200000)).toBe("200000-ci");
    expect(sirasayi(300000)).toBe("300000-ci");
    expect(sirasayi(500000)).toBe("500000-ci");
  });
});