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

    it("Calculator returns fizz with input 3", () => {
      expect(calculator(3)).to.equal("fizz");
  });

    it("Calculator returns fizz for multiples of 3", () => {
      expect(calculator(6)).to.equal("fizz");
  });
});
