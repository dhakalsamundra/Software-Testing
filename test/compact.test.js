import { expect } from 'chai';
import compact from "../src/compact.js";

describe("Creates an array with all falsey values removed", () => {

    it("Return empty array if pass an empty array", () => {
        let result = compact([])
        expect(result).to.deep.eq([])
    })

    it("Throw error message as 'Array is not iterable' if pass undefined", () => {
        let callFunction = () => compact(undefined)
        expect(callFunction).to.throw('array is not iterable')
    })

    it("remove the falsy value from the array", () => {
        let result = compact([0,1,false,2,3]);
        expect(result).to.deep.eq([1,2,3]);
    })
});
