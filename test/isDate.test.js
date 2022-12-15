import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('Check if the value is date or not', () => {
   it("check if the new Date is date or not", () => {
      let date = isDate(new Date());
      expect(date).to.be.true;
   })

   it("check if provided date in letter is a date or not", () => {
      let date = isDate('Tue Dec 13 2022 18:48:07 GMT+0200 (Eastern European Standard Time)');
      expect(date).to.be.true;
   })
  it('Returns true if date object is passed', () => {
    expect(isDate(new Date())).to.be.true;
  });
  it('Returns false if date string is passed', () => {
    expect(isDate('2021-11-12')).to.be.false;
  });
  it('Returns false if null is passed', () => {
    expect(isDate(null)).to.be.false;
  });
  it('Returns false if number is passed', () => {
    expect(isDate(20)).to.be.false;
  });
  it('Returns false if undefined is passed', () => {
    expect(isDate(undefined)).to.be.false;
  });
  it('Returns false if false value is passed', () => {
    expect(isDate(false)).to.be.false;
  });
});
