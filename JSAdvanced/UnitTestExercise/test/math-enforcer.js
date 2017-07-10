/**
 * Created by Stefan on 8.7.2017 г..
 */
let mathEnforcer = require("../MathEnforcer").mathEnforcer;
let expect = require("chai").expect;


describe("Should function correctly", function () {
    describe("AddFive function tests", function () {
        it("Should be a Number",function () {
            expect(mathEnforcer.addFive("pesho")).to.be.undefined;
        });
        it('Should add 5',function () {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('Should add 5',function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('Should add 5',function () {
            expect(mathEnforcer.addFive(5.1)).to.be.closeTo(10.1,0.01);
        });

    });
    describe("Subtrack function tests", function () {
        it("Should be a Number",function () {
            expect(mathEnforcer.subtractTen("pesho")).to.be.undefined;
        });
        it('Should subtrack 10',function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('Should subtrack 10',function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Should subtrack 10',function () {
            expect(mathEnforcer.subtractTen(-10.1)).to.equal(-20.1, 0.01);
        });

    });
    describe("Sum function tests", function () {
        it("Should be a Number",function () {
            expect(mathEnforcer.sum("pesho",5)).to.be.undefined;
        });
        it("Should be a Number",function () {
            expect(mathEnforcer.sum(5,"pesho")).to.be.undefined;
        });
        it('Should add 5',function () {
            expect(mathEnforcer.sum(5,5)).to.equal(10);
        });
        it('Should add 5',function () {
            expect(mathEnforcer.sum(-6,-5)).to.equal(-11);
        });
        it('Should add 5',function () {
            expect(mathEnforcer.sum(5.5,5.6)).to.equal(11.1, 0.01);
        });
        it('Should add 5',function () {
            expect(mathEnforcer.sum(5,5.6)).to.equal(10.6, 0.01);
        });
        it('Should add 5',function () {
            expect(mathEnforcer.sum(5.5,5)).to.equal(10.5, 0.01);
        });

    });
});