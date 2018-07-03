import Mocha from 'mocha'
import { expect } from 'chai'
import { display } from '../src/vending-machine.js'

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
  })
})
