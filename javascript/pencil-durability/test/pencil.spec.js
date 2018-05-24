import Mocha from 'mocha'
import { expect } from 'chai'
import { Paper } from '../src/paper'
import { Pencil } from '../src/pencil'

describe("Canary test", () => {
  it("true equals true", () => {
      expect(true).to.equal(true);
  });
});

describe("Pencil Durability Kata", () => {

  let paper;
  let pencil;

  beforeEach(() => {
    paper = new Paper
    pencil = new Pencil(paper)
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
  })

  describe("Sharpen", () => {
    it("should regain initial durability when sharpened", () => {
      pencil.write("Apples are the best")

      pencil.sharpen()

      expect(pencil.getDurability()).to.equal(100)
    })

    it("sharpening should reduce pencil length", () => {
      pencil.write("I love apples")

      pencil.sharpen()

      expect(pencil.getPencilLength()).to.equal(9)
    })
  })
})
