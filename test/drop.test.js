import { expect } from 'chai';
import drop from "../src/drop.js";

describe("Function of dropping an array via an arg", () => {

    it("dropping empty array gives back an empty array", () => {
        let result = drop({ length: 0 }, 0)
        expect(result).to.deep.eq([])
    })

    it("dropping an array with negative integer gives undefined", () => {
        let result = drop({ length: 1 }, -1)
        expect(result).to.deep.eq([undefined])
    })

    it("Dropping an array with NaN gives back an empty array", () => {
        let result = drop({ length: NaN }, NaN)
        expect(result).to.deep.eq([])
    })

    it("dropping an array without providing the integer erase the first element and return back remaining array as resullt", () => {
        let result = drop([1,2,3]);
        expect(result).to.deep.eq([2,3])
    })

    it("dropping an array with binary integer 2 to erase the first  twoelement and return back remaining array as resullt", () => {
        let result = drop([1,2,3],"0b10");
        expect(result).to.deep.eq([3])

    })
});
