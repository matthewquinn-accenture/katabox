import Mocha from 'mocha'
import { expect } from 'chai'
import { Pencil } from '../src/pencil'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Pencil Durability Kata", () => {

  let pencil;

  beforeEach(() => {
    pencil = new Pencil()
  })

  describe("Write", () => {
    it("pencil can write", () => {
      pencil.write("She sells sea shells")

      expect(pencil.getText()).to.equal("She sells sea shells")
    })

    it("amends text to previous", () => {
      pencil.write("She sells sea shells")
      pencil.write(" down by the shore")

      expect(pencil.getText()).to.equal("She sells sea shells down by the shore")
    })
  })

  describe("Point Degregation", () => {
    it("pencil has initial durability", () => {
      expect(pencil.getDurability()).equal(100)
    })

    it("lowercase degregation", () => {
      pencil.write("apple")

      expect(pencil.getDurability()).to.equal(95)
    })

    it("uppercase degregation", () => {
      pencil.write("APPLE")

      expect(pencil.getDurability()).to.equal(90)
    })

    it("mixed-case words", () => {
      pencil.write("ApPle")

      expect(pencil.getDurability()).to.equal(93)
    })

    it("shoud not degrade for spaces or newlines", () => {
      pencil.write("\n")
      pencil.write("   ")

      expect(pencil.getDurability()).to.equal(100)
    })

    it("durability can't be negative", () => {
      pencil.write("WriTInG A BUNCH OF TeXT UnTIL DuRABIlITY ReAChEs PAST Zero ZERO ZERO")

      expect(pencil.getDurability()).to.equal(0)
    })

    it("write a space when durability is 0", () => {
      pencil.write("WriTInG A BUNCH OF TeXT UnTIL DuRABIlITY ReAChEs PAST ZEro ZERO ZERo")

      expect(pencil.getText()).to.equal("WriTInG A BUNCH OF TeXT UnTIL DuRABIlITY ReAChEs PAST ZEro ZERO ZER ")
    })
  })
})
