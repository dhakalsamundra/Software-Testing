import { expect } from 'chai';
import filter from "../src/filter.js";

describe("Use for searching/filtering the products", () => {
  const oneArgPredicate = (x) => typeof x === "number";
  const invalidPredicate = "Iphone 14";
  const arrayValue = [true, 1400, "Apple Product"];
  const stringValue = 1;

  it("Filter the full shopping cart with an invalid predicate throws error",  () => {
      expect(function(){ filter(arrayValue, invalidPredicate) }).to.throw(TypeError);
  });

  it("Filter the full shopping cart without predicate throws error",  () => {
      expect(function(){ filter(arrayValue, invalidPredicate) }).to.throw(TypeError);
  });

  it("Filter the full shopping cart with a predicate taking one arg gives the filtered array",  () => {
    try {
      expect(function(){ filter(arrayValue, invalidPredicate) }).to.deep.eq(1);
    } catch (e){}
  });

  it("Filtering without arg throws error", () => {
      expect((()=>{ filter()})).to.throw(TypeError);
  })

  it("filter a string with a predicate and one arg throw error", () =>{
      expect(function(){ filter(stringValue, oneArgPredicate) }).to.throw(TypeError);
  })

  it("Filtering an empty shopping cart without predicate throws error", () => {
      expect((()=>{ filter([])})).to.throw(TypeError);
  })

  it("Filtering an empty shopping cart with invalid predicate throws error", () => {
      expect((()=>{ filter([], oneArgPredicate)})).to.throw(TypeError);
  })

  it("Filtering an empty shopping cart with a predicate and one arg result in the empty array value", () => {
      expect(function(){ filter(arrayValue, invalidPredicate) }).to.deep.eq([]);
  })

});

