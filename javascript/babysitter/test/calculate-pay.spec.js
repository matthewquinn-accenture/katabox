import Mocha from 'mocha'
import { expect } from 'chai'
import { START_TIME_RATE, calculateStartTime } from '../src/calculate-pay'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Babysitter Kata", () => {

  describe("start-time shift", () => {
    it("Calculate start-time rate", () => {
      expect(START_TIME_RATE * 1).to.equal(calculateStartTime(4, 5));
    });
  });

});
