import { expect } from 'chai';
import ceil from "../src/ceil.js";

describe("Round up: the smallest integer greater than or equal to a given number.", () => {
  
    it("round float with integer returns float", () => {
        expect(ceil(6.004,2)).to.eq(6.01);
    })

    it("round up the float with empty value unchange the value", () => {
        expect(ceil(4.0001)).to.eq(5);
    })

    it("round up the integer with empty value unchange the value", () => {
        expect(ceil(4)).to.eq(4);
    })

    it("round integer with integer returns same integer", () => {
        expect(ceil(4, 1)).to.equal(4);
      });
});
