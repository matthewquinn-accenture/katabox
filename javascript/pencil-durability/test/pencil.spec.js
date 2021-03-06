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

    it("when length is 0 durability isn't restored", () => {
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()
      pencil.sharpen()

      pencil.write("Apples")

      pencil.sharpen()

      expect(pencil.getDurability()).to.equal(93)
    })
  })

  describe("Erase", () => {
    it("should erase a given word", () => {
      pencil.write("I like apples")

      pencil.erase("apples")

      expect(paper.getText()).to.equal("I like       ")
    })

    it("should erase last instance of a word if it repeats", () => {
      pencil.write("How much wood would a woodchuck chuck if a woodchuck could chuck wood?")

      pencil.erase("chuck")

      expect(paper.getText()).to.equal("How much wood would a woodchuck chuck if a woodchuck could       wood?")

      pencil.erase("chuck")

      expect(paper.getText()).to.equal("How much wood would a woodchuck chuck if a wood      could       wood?")
    })
  })

  describe("Eraser Degregation", () => {
    it("pencil has initial eraser durability", () => {
      expect(pencil.getEraserDurability()).to.equal(15)
    })

    it("eraser durability decrease by 1 when eraser is called", () =>{
      pencil.write("I like apples")

      pencil.erase("apples")

      expect(pencil.getEraserDurability()).to.equal(9)
    })

    it("whitespace doesn't degrade eraser", () => {
      pencil.write("Let's do this")

      pencil.erase(" ")

      expect(pencil.getEraserDurability()).to.equal(15)
    })

    it("pencil should erase in opposite order it was written", () => {
      pencil.write("ThisIsARunOnSentenceOrSomething")

      pencil.erase("ThisIsARunOnSentenceOrSomething")

      expect(paper.getText()).to.equal("ThisIsARunOnSent               ")
    })
  })

  describe("Editing", () => {
    it("editing should append text to blank spaces", () => {
      pencil.write("An       a day keeps the doctor away")

      pencil.edit("onion")

      expect(paper.getText()).to.equal("An onion a day keeps the doctor away")
    })

    it("overlapping text edits return @", () => {
      pencil.write("An       a day keeps the doctor away")

      pencil.edit("artichoke")

      expect(paper.getText()).to.equal("An artich@k@ay keeps the doctor away")
    })
  })
})
