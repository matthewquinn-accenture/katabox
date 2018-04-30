import Mocha from 'mocha'
import { expect } from 'chai'
import { calculateStartTimeHours } from '../src/calculate-hours'

describe("Babysitter kata", () => {
  describe("Calculate start-time hours", () => {

    it("Calculate start-time hours", () => {
      expect(1).to.equal(calculateStartTimeHours(5, 6, 2))
    });
  });
});
