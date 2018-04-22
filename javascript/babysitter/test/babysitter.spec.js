import Mocha from 'mocha'
import { expect } from 'chai'
import { Babysitter } from '../src/babysitter'

describe("Babysitter Kata", () => {

  describe("exceptions", () => {
    it("Can't start before 5PM", () => {
      let babysitter = () => { new Babysitter(4) }
      expect(babysitter).to.throw(Error, "Can't start before 5PM!")
    });

    it("Can't stay later than 4AM", () => {
      let babysitter = () => { new Babysitter(5, 8, 5) }
      expect(babysitter).to.throw(Error, "Can't work later than 4AM!")
    });
  });
});
