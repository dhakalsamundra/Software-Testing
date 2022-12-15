import { expect } from 'chai';
import add from "../src/add.js";

describe("Add functionality ", () => {

  it("add 2 positive number", () => {
    expect(add(10,11)).to.equal(21);
  });

  it("add negative number", () => {
    expect(add(7,-3)).to.equal(4);
  });

  it("add decimal number to another decimal number", () => {
    expect(add(0.00009,0.001)).to.equal(0.00109);
  })

  it("add float to negative of the float, returns zero", () => {
    expect(add(1.05, -1.05)).to.equal(0);
});

it("it returns zero if the inputs are empty", () => {
  expect(add()).to.equal(0);
});

it("adding of the string throws a type error", () => {
  expect(() =>{ add("Degree Celcius", 0) }).to.throw(TypeError);
})

it("add positive integer to negative float, returns float with correct sign", () => {
  expect(add(11, -2.65)).to.equal(8.35);
});
});
