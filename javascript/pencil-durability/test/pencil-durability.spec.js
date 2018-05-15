import Mocha from 'mocha'
import { expect } from 'chai'
import { write } from '../src/pencil-durability'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Pencil Durability Kata", () => {

  describe("Write", () => {
    it("pencil can write", () => {
      expect(write()).to.equal("She sells sea shells")
    })
  })
})
