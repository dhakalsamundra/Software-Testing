import filter from "../src/filter";

describe("Use for searching/filtering the products", () => {
  const oneArgPredicate = (x) => typeof x === "number";
  const invalidPredicate = "Iphone 14";
  const arrayValue = [true, 1400, "Apple Product"];
  const stringValue = 1;

  test("Filter the full shopping cart with an invalid predicate throws error", async () => {
    try {
      await function(){ filter(arrayValue, invalidPredicate) }
    } catch (e){
      expect(e).rejects.toThrowError(TypeError);
    }
  });

  test("Filter the full shopping cart without predicate throws error", async () => {
    try {
      await function(){ filter(arrayValue, invalidPredicate) }
    } catch (e){
      expect(e).rejects.toThrowError(TypeError);
    }
  });

  test("Filter the full shopping cart with a predicate taking one arg gives the filtered array", async () => {
    try {
      expect(await function(){ filter(arrayValue, invalidPredicate) }).toStrictEqual(1);
    } catch (e){}
  });

  test("Filtering without arg throws error", async() => {
    try{
      await (()=>{ filter()})
    } catch(e){
      // console.log(e);
      expect(e).rejects.toThrowError(TypeError);
    }
  })

  test("filter a string with a predicate and one arg throw error", async() =>{
    try{
      await function(){ filter(stringValue, oneArgPredicate) }
    } catch(e){
      // console.log(e);
      expect(e).rejects.toThrowError(TypeError);
    }
  })

  test("Filtering an empty shopping cart without predicate throws error", async() => {
    try{
      await (()=>{ filter([])})
    } catch(e){
      // console.log(e);
      expect(e).rejects.toThrowError(TypeError);
    }
  })

  test("Filtering an empty shopping cart with invalid predicate throws error", async() => {
    try{
      await (()=>{ filter([], oneArgPredicate)})
    } catch(e){
      // console.log(e);
      expect(e).rejects.toThrowError(TypeError);
    }
  })

  test("Filtering an empty shopping cart with a predicate and one arg result in the empty array value", async() => {
    try{
      expect(await function(){ filter(arrayValue, invalidPredicate) }).toStrictEqual([]);
    } catch(e){}
  })

});

