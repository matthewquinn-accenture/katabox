import Mocha from 'mocha'
import { expect } from 'chai'
import { calculateStartTimeHours, calculateBedtimeHours, calculateMidnightHours } from '../src/calculate-hours'

describe("Babysitter kata", () => {
  describe("Calculate start-time hours", () => {

    it("Calculate start-time hours", () => {
      expect(calculateStartTimeHours(5, 6, 2)).to.equal(1)
    });

    it("Calculate hours if start-time is after bedtime", () => {
      expect(calculateStartTimeHours(10, 8, 2)).to.equal(0)
    });
  });

  describe("Calculate bedtime hours", () => {

    it("Calculate bedtime hours", () => {
      expect(calculateBedtimeHours(5, 8, 2)).to.equal(4)
    });

    it("Calculate bedtime hours if endtime is before midnight", () => {
      expect(calculateBedtimeHours(5, 8, 10)).to.equal(2)
    });
  });

  describe("Calculate midnight hours", () => {

    it("Calculate midnight hours", () => {
      expect(calculateMidnightHours(5, 8, 2)).to.equal(2)
    });

    it("Calculate hours if endtime is before midnight", () => {
      expect(calculateMidnightHours(5, 8, 10)).to.equal(0)
    });
  });
});
