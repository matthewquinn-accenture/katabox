import Mocha from 'mocha'
import { expect } from 'chai'
import { calculateStartTimeHours, calculateBedtimeHours, calculateMidnightHours } from '../src/calculate-hours'

describe("Babysitter kata", () => {
  describe("Calculate start-time hours", () => {

    it("Calculate start-time hours", () => {
      expect(1).to.equal(calculateStartTimeHours(5, 6, 2))
    });

    it("Calculate hours if start-time is after bedtime", () => {
      expect(0).to.equal(calculateStartTimeHours(10, 8, 2))
    });
  });

  describe("Calculate bedtime hours", () => {

    it("Calculate bedtime hours", () => {
      expect(4).to.equal(calculateBedtimeHours(5, 8, 2))
    });

    it("Calculate bedtime hours if endtime is before midnight", () => {
      expect(2).to.equal(calculateBedtimeHours(5, 8, 10))
    });
  });

  describe("Calculate midnight hours", () => {

    it("Calculate midnight hours", () => {
      expect(2).to.equal(calculateMidnightHours(5, 8, 2))
    });

    it("Calculate hours if endtime is before midnight", () => {
      expect(0).to.equal(calculateMidnightHours(5, 8, 10))
    });
  });
});
