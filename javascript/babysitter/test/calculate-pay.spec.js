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
      expect(rates.calculateStartTimePay(5, 8, 2)).to.equal(rates.START_TIME_RATE * 3);
    });
  });

  describe("bedtime shift", () => {
    it("Calculate bedtime rate", () => {
      expect(rates.calculateBedtimePay(5, 8, 2)).to.equal(rates.BEDTIME_RATE * 4)
    });
  });

  describe("midnight shift", () => {
    it("Calculate midnight rate", () => {
      expect(rates.calculateMidnightPay(5, 8, 2)).to.equal(rates.MIDNIGHT_RATE * 2)
    });
  });

  describe("total shift", () => {
    it("Calculate total shift", () => {
      expect(rates.calculateTotalPay(5, 8, 2)).to.equal(100)
    });
  });
});
