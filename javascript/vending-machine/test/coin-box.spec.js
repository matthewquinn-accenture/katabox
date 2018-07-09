import Mocha from 'mocha'
import { expect } from 'chai'
import { isValidCoin } from '../src/coin-box.js'
import { NICKEL, DIME, QUARTER} from './coin.js'

describe("Vending Machine Kata", () => {
  describe("Coins", () => {
    it("A nickel is a valid coin", () => {
      expect(isValidCoin(NICKEL)).to.equal(true)
    })

    it("A dime is a valid coin", () => {
      expect(isValidCoin(DIME)).to.equal(true)
    })

    it("A quarter is a valid coin", () => {
      expect(isValidCoin(QUARTER)).to.equal(true)
    })
  })
})
