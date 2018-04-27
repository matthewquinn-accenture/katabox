import Mocha from 'mocha'
import { expect } from 'chai'
import * as rates from '../src/calculate-pay'

describe("Babysitter Kata", () => {

  describe("exceptions", () => {
    it("Can't start before 5PM", () => {
      try {
        rates.calculateStartTime(3, 8, 2)
      }
      catch(err) {
        expect("Can't start before 5PM!").to.equal(err.message)
      }
    });

    it("Can't stay later than 4AM", () => {
      try {
       rates.calculateMidnight(5, 8, 5)
      }
      catch(err) {
        expect("Can't work later than 4AM!").to.equal(err.message)
      }
    });
  });
  describe("edge cases", () => {
    it("Start-time is after bedtime", () => {
      expect(64).to.equal(rates.calculateTotalPay(10, 8, 2))
    });
  });
});
