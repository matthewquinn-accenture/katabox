import Mocha from 'mocha'
import { expect } from 'chai'
import { display, insert } from '../src/vending-machine.js'
import { NICKEL, DIME, QUARTER } from './coin.js'

describe("Canary test", () => {
  it("true equals true", () => {
    expect(true).to.equal(true);
  });
});

describe("Vending Machine Kata", () => {
  describe("Display", () => {
    it("Default display is INSERT COIN", () => {
      expect(display()).to.equal("INSERT COIN")
    })

    it("Inserting a nickel updates display", () => {
      insert(NICKEL)

      expect(display()).to.equal(0.05)
    })

    it("Inserting a dime updates display", () => {
      insert(DIME)

      expect(display()).to.equal(0.10)
    })

    it("Inserting a quarter updates display", () => {
      insert(QUARTER)

      expect(display()).to.equal(0.25)
    })
  })
})
