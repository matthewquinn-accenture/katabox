import Mocha from 'mocha'
import { expect } from 'chai'
import { isValidCoin } from '../src/coin.js'

describe("Vending Machine Kata", () => {
  describe("Coins", () => {
    it("A nickel is a valid coin", () => {
      expect(isValidCoin()).to.equal(true)
    })
  })
})
