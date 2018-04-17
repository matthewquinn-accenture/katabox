import Mocha from 'mocha'
import { expect } from 'chai'
import { calculator } from '../src/fizzbuzz'

describe("Canary test", () => {
  it("True equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Fizzbuzz Kata", () => {
    it("Calculator should return input", () => {
      expect(calculator(1)).to.equal(1);
    });
});
