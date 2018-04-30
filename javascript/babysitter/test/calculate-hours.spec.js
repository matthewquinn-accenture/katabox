import Mocha from 'mocha'
import { expect } from 'chai'
import { calculateStartTimeHours } from '../src/calculate-hours'

describe("Babysitter kata", () => {
  describe("Calculate start-time hours", () => {

    it("Calculate start-time hours", () => {
      expect(1).to.equal(calculateStartTimeHours(5, 6, 2))
    });

    it("Calculate hours if start-time is after bedtime", () => {
      expect(0).to.equal(calculateStartTimeHours(10, 8, 2))
    });
  });
});
