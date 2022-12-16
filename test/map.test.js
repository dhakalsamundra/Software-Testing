import { expect } from 'chai';
import map from '../src/map.js';

describe('Map - Iterates over the elements to create a new array', () => {
  it('Populate the element according to the condition defined on the callback function and create a new array', () => {
    const square = (n) => n * n;

    const inputArray = [4, 8];
    const expectedArray = [16, 64];
    expect(map(inputArray, square)).to.deep.equal(expectedArray);
    expect(map(inputArray, square)).to.be.an('array');
  });

  it('When the null value is passed as parameter it should return an empty array', () => {
    const square = (n) => n * n;
    const inputArray = null;
    const expectedArray = [];

    expect(map(inputArray, square)).to.deep.equal(expectedArray);
    expect(map(inputArray, square)).to.be.an('array');
  });
});
