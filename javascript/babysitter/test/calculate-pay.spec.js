import Mocha from 'mocha'
import { expect } from 'chai'
import * as rates from '../src/calculate-pay'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Babysitter Kata", () => {

  describe("start-time shift", () => {
    it("Calculate start-time rate", () => {
      expect(rates.START_TIME_RATE * 1).to.equal(rates.calculateStartTime(4, 5));
    });
  });

  describe("bedtime shift", () => {
    it("Calculate bedtime rate", () => {
      expect(rates.BEDTIME_RATE * 4).to.equal(rates.calculateBedtime(8));
    });
  });

  describe("midnight shift", () => {
    it("Calculate midnight rate", () => {
      expect(rates.MIDNIGHT_RATE * 3).to.equal(rates.calculateMidnight(3));
    });
  });

  describe("total shift", () => {
    it("Calculate total shift", () => {
      expect(104).to.equal(rates.calculateTotalPay(17, 21, 2));
    });
  });
});
