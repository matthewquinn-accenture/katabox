import Mocha from 'mocha'
import { expect } from 'chai'
import * as rates from '../src/calculate-pay'
import { Babysitter } from '../src/babysitter'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Babysitter Kata", () => {
  let babysitter;

  beforeEach (() => {
    babysitter = new Babysitter()
  });

  describe("start-time shift", () => {
    it("Calculate start-time rate", () => {
      expect(rates.START_TIME_RATE * 3).to.equal(rates.calculateStartTime());
    });
  });

  describe("bedtime shift", () => {
    it("Calculate bedtime rate", () => {
      expect(rates.BEDTIME_RATE * 4).to.equal(rates.calculateBedtime());
    });
  });

  describe("midnight shift", () => {
    it("Calculate midnight rate", () => {
      expect(rates.MIDNIGHT_RATE * 2).to.equal(rates.calculateMidnight());
    });
  });

  describe("total shift", () => {
    it("Calculate total shift", () => {
      expect(100).to.equal(rates.calculateTotalPay());
    });
  });
});
