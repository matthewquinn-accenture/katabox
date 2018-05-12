import Mocha from 'mocha'
import { expect } from 'chai'
import * as rates from '../src/calculate-pay'

describe("Babysitter Kata", () => {

  describe("exceptions", () => {
    it("Can't start before 5PM", () => {
      try {
        rates.calculateStartTimePay(3, 8, 2)
      }
      catch(err) {
        expect(err.message).to.equal("Can't start before 5PM!")
      }
    });

    it("Can't stay up past MIDNIGHT", () => {
      try {
        rates.calculateBedtimePay(5, 1, 2)
      }
      catch(err) {
        expect(err.message).to.equal("Can't stay up past MIDNIGHT!")
      }
    });

    it("Can't stay later than 4AM", () => {
      try {
       rates.calculateMidnightPay(5, 8, 5)
      }
      catch(err) {
        expect(err.message).to.equal("Can't work later than 4AM!")
      }
    });
  });
  describe("edge cases", () => {
    it("Start-time is after bedtime", () => {
      expect(rates.calculateTotalPay(10, 8, 2)).to.equal(64)
    });

    it("Endtime is before MIDNIGHT", () => {
      expect(rates.calculateTotalPay(5, 8, 10)).to.equal(52)
    });
  });
});
