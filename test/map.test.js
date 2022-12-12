import { expect } from "chai";
import map from "../src/map.js";

describe("Use in the product of array and return the array result of product.", () => {
  const oneArgFunction = (a) => a + "mapped";
  const invalidFunction = "Iphone 14";
  const arrayValue = [true, 1400, "Apple Product"];
  const mappedArrayValue = ["truemapped", "1400mapped", "Apple Productmapped"];
  const nonArrayValue = 1;

  it("mapping a empty array with Function with 1 arg gives empty array", () => {
    expect(map([], invalidFunction)).to.deep.eq([]);
  });

  it("map a non-empty array with a non array function throws error", () => {
    expect(() => {
      map(arrayValue, nonArrayValue);
    }).to.throw(TypeError);
  });

  it("map a non-empty array with a function with 1 arg is mapped correctly", () => {
    expect(map(arrayValue, oneArgFunction)).to.deep.equal(mappedArrayValue);
  });

  it("map a non-empty array without a function arg throws type error", () => {
    expect(() => {
      map(arrayValue);
    }).to.throw(TypeError);
  });

  it("map a non-empty array with invalid function throws type error", () => {
    expect(() => {
      map(arrayValue, invalidFunction);
    }).to.throw(TypeError);
  });
  
  it(" map with no arguments throws error", () => {
    expect(function(){ map() }).to.throw(TypeError);
});
});
