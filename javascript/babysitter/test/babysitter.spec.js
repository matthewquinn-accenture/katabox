import Mocha from 'mocha'
import { expect } from 'chai'
import { Babysitter } from '../src/babysitter'

describe("Babysitter Kata", () => {

  describe("exceptions", () => {
    it("Can't start before 5PM", () => {
      let babysitter = () => { new Babysitter(4) }
      expect(babysitter).to.throw(Error, "Can't start before 5PM!")
    });
  });
});
