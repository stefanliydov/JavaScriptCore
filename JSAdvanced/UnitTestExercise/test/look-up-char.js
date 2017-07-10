let lookupChar = require('../CharLookUp').lookupChar;
let expect = require('chai').expect;

describe('Test CharLookUp function', function () {
    it("should return undefined",function () {
        expect(lookupChar(12,1)).to.be.undefined;
    });
    it("should return undefined",function () {
        expect(lookupChar("stefa", "sd")).to.be.undefined;
    });
    it("should return undefined",function () {
        expect(lookupChar("asd",1.21)).to.be.undefined;
    });
    it("Should return Incorrect index", function () {
        expect(lookupChar("pesno", 10)).to.equal('Incorrect index');
    })
    it("Should return Incorrect index", function () {
        expect(lookupChar("pesno", -1)).to.equal('Incorrect index');
    })
    it("Should return Incorrect index", function () {
        expect(lookupChar("pesno", 5)).to.equal('Incorrect index');
    })
    it("Should return correct char", function () {
        expect(lookupChar("stefan",1)).to.equal('t');
    })
})