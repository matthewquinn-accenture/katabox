import Mocha from 'mocha'
import { expect } from 'chai'
import { isValidCoin } from '../src/coin-box.js'
import { NICKEL } from './coin.js'

describe("Vending Machine Kata", () => {
  describe("Coins", () => {
    it("A nickel is a valid coin", () => {
      expect(isValidCoin(NICKEL)).to.equal(true)
    })
  })
})
