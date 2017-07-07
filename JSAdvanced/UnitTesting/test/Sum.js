function sum(arr) {
    let sum = 0;
    for(let el of arr){
        sum+=el;
    }
    return sum;
}
let expect = require('chai').expect;
describe("Test summator", function () {
    it("Should return 3 for [1,2]", function () {
        expect(sum([1,2])).to.equal(3);
    });
    it("Should return 4 for [2,2]", function () {
        expect(sum([2,2])).to.equal(4);
    });
    
})