import { expect } from "chai";
import toNumber from "../src/toNumber.js";

describe("Convert to number", () => {
  it("convert a string integer number to the number", () => {
    expect(toNumber("10")).to.eq(10);
  });

  it("convert a symbol returns NaN", () => {
    expect(toNumber(Symbol())).to.deep.eq(NaN);
  });

  it("convert a non number string returns NaN", () => {
    expect(toNumber("Software testing")).to.deep.eq(NaN);
  });

  it("Converting the object to number return NaN", () => {
    expect(toNumber({ shirt: "Gant", Pant: "Levis" })).to.deep.eq(NaN);
  });

  it("array as an input returns NaN", () => {
    expect(toNumber([1, 2, 3])).to.deep.eq(NaN);
  });

  it("converts hex string into a number", () => {
    expect(toNumber("0xBF57C")).to.eq(783740);
  });

  it("converts octal string into a number", () => {
    expect(toNumber("0o52")).to.equal(42);
  });

  it("converts binary string into a number", () => {
    expect(toNumber("0b1011")).to.equal(11);
  });

  it("Empty input return NaN", () => {
    expect(toNumber()).to.deep.eq(NaN);
  });
});
