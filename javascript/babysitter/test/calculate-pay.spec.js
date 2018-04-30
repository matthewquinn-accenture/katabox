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
      expect(rates.START_TIME_RATE * 3).to.equal(rates.calculateStartTimePay(5, 8, 2));
    });
  });

  describe("bedtime shift", () => {
    it("Calculate bedtime rate", () => {
      expect(rates.BEDTIME_RATE * 4).to.equal(rates.calculateBedtimePay(5, 8, 2));
    });
  });

  describe("midnight shift", () => {
    it("Calculate midnight rate", () => {
      expect(rates.MIDNIGHT_RATE * 2).to.equal(rates.calculateMidnightPay(5, 8, 2));
    });
  });

  describe("total shift", () => {
    it("Calculate total shift", () => {
      expect(100).to.equal(rates.calculateTotalPay(5, 8, 2));
    });
  });
});
