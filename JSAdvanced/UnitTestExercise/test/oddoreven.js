/**
 * Created by Stefan on 8.7.2017 г..
 */
let isOddOrEven = require("../EvenOrOdd").isOddOrEven;
let expect = require('chai').expect;

describe("Test if a word is even or odd lenght", function () {
    it('Should return undefined if not string', function () {
        expect(isOddOrEven(12)).to.be.undefined;
    });
    it('Should return undefined if not string', function () {
        expect(isOddOrEven([])).to.be.undefined;
    });
    it('Should return undefined if not string', function () {
        expect(isOddOrEven({})).to.be.undefined;
    });
    it("Should return even for 'stefan'", function () {
        expect(isOddOrEven('stefan')).to.equal("even");
    });
    it("Should return odd for 'stefa'",function () {
        expect(isOddOrEven('stefa')).to.equal("odd");
    })
})