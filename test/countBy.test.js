import { expect } from 'chai';
import countBy from '../src/countBy.js';

describe("Function of Counting via a arg", () => {

    const invalidFunction = "Iphone 14";
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
       ]

     it("Count the array of object with an invalid predicate throws error",  () => {
        expect(function(){ countBy(users, invalidFunction) }).to.throw(TypeError);
    });

    it("Count the array of object without predicate throws error",  () => {
        expect(function(){ countBy(users, invalidFunction) }).to.throw(TypeError);
    });

    it("count the number of active users", () => {
            let result = countBy(users, (each) => each.active);
            expect(result).to.deep.eq({ 'true': 2, 'false': 1 });
    })
});

  it('Counts the number of objects with given attribute in an array of objects', () => {
    expect(
      countBy(
        [
          { user: 'barney', active: true },
          { user: 'betty', active: true },
          { user: 'fred', active: false },
        ],
        (value) => value.active
      )
    ).to.deep.equal({ true: 1, false: 0 });
});
