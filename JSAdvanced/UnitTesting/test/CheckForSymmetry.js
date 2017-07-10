let isSymmetric = require('../Symmetry').isSymmetric;
let expect = require("chai").expect;

describe("Check symmetry", ()=>{
    describe("General check", ()=> {
        it("Should be a function",()=>{
            expect(typeof isSymmetric).to.equal('function');
        });
    })
    describe("Value tests", function () {
        it("Should return true for [1,2,3,3,2,1]", function () {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
        });
        it("Should return false for [1,2,3,4,5,6]",function () {
            expect(isSymmetric([1,2,3,4,5,6])).to.be.false;
        })
        it("Should return true for [-1,2,3,2,-1]", function () {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
        });
        it("Should return false for [-1,2,3,2,1]",function () {
            expect(isSymmetric([1,2,3,4,5,6])).to.be.false;
        })
        it("Should return false for [1,2]",function () {
            expect(isSymmetric([1,2])).to.be.false;
        })
        it("Should return true for [1]", function () {
            expect(isSymmetric([1])).to.be.true;
        });
        it("Should return true for [1,2,3,3,2,1]", function () {
            expect(isSymmetric([-11,2,3,3,2,-11])).to.be.true;
        });
        it("Should return true for [{a:5},'stefan',3,3,'stefan',{a:5}]", function () {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
        });
        it("Should return false for [{a:5},'stefan',3,3,'tefan',{a:5}]",function () {
            expect(isSymmetric([1,2,3,4,5,6])).to.be.false;
        })
        it("Should return false for 1,2,3",function () {
            expect(isSymmetric(1,2,3)).to.be.false;
        })
    })
});