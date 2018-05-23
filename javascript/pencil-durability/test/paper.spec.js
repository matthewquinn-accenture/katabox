import Mocha from 'mocha'
import { expect } from 'chai'
import { Paper } from '../src/paper'
import { Pencil } from '../src/pencil'

describe("Pencil Durability Kata", () => {

  let paper;
  let pencil;

  beforeEach(() => {
    paper = new Paper
    pencil = new Pencil(paper)
  })

  describe("Write", () => {
    it("pencil can write", () => {
      pencil.write("She sells sea shells")

      expect(paper.getText()).to.equal("She sells sea shells")
    })

    it("amends text to previous", () => {
      pencil.write("She sells sea shells")
      pencil.write(" down by the shore")

      expect(paper.getText()).to.equal("She sells sea shells down by the shore")
    })

    it("write a space when durability is 0", () => {
      pencil.write("WriTInG A BUNCH OF TeXT UnTIL DuRABIlITY ReAChEs PAST ZEro ZERO ZERo")

      expect(paper.getText()).to.equal("WriTInG A BUNCH OF TeXT UnTIL DuRABIlITY ReAChEs PAST ZEro ZERO ZER ")
    })
  })
})
