import Mocha from 'mocha'
import { expect } from 'chai'
import { write, getText, getDurability } from '../src/pencil-durability'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Pencil Durability Kata", () => {

  describe("Write", () => {
    it("pencil can write", () => {
      write("She sells sea shells")
      expect(getText()).to.equal("She sells sea shells")
    })

    it("amends text to previous", () => {
      write(" down by the shore")
      expect(getText()).to.equal("She sells sea shells down by the shore")
    })
  })

  describe("Point Degregation", () => {
    it("pencil has initial durability", () => {
      expect(getDurability()).equal(100)
    })
  })
})
