import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return the number if not divisible by 3 or 5", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(7)).toBe(7);
    expect(fizzbuzz(11)).toBe(11);
  });

  it('should return "Fizz" if divisible by 3', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
    expect(fizzbuzz(12)).toBe("Fizz");
  });

  it('should return "Buzz" if divisible by 5', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
    expect(fizzbuzz(20)).toBe("Buzz");
  });

  it('should return "FizzBuzz" if divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
    expect(fizzbuzz(45)).toBe("FizzBuzz");
  });
});
