import { expect } from 'chai';
import capitalize from "../src/capitalize.js";

describe("Convert the string from upper case to lower case ", () => {

  it("convert the first string to the Upper case", () => {
    const string = capitalize("upper case string");
    expect(string).contain("Upper case string");
  });

  it("convert the first string to the Upper case and remaining to lower case", () => {
    const string = capitalize("uPPER CASE STRING");
    expect(string).contain("Upper case string");
  });
});
