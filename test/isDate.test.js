import { expect } from 'chai';
import isDate from "../src/isDate.js";

describe("Check if the value is date or not", () => {

 it("check if the new Date is date or not", () => {
    let date = isDate(new Date());
    expect(date).to.be.true;
 })

 it("check if provided date in letter is a date or not", () => {
    let date = isDate('Tue Dec 13 2022 18:48:07 GMT+0200 (Eastern European Standard Time)');
    expect(date).to.be.true;
 })
});
