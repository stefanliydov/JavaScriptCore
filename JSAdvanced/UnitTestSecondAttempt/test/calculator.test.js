let createCalculator = require('./calculator').createCalculator;
let expect = require('chai').expect;


describe("Calculator", function () {
    let calc = createCalculator();
    beforeEach(function () {
        calc = createCalculator();
    });

    it("Should return an obj", function () {

        expect(typeof calc).to.equal("object");
    });

    it('Should have 0 value when created', function () {
        expect(calc.get()).to.equal(0);
    });
    it("Should add", function () {
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.equal(8);
    });
    it("Should subtrack", function () {
        calc.subtract(3);
        calc.subtract(5);
        expect(calc.get()).to.equal(-8);
    });
    it("Should fractions", function () {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.00001);
    });
    it("Should work with neg numbers", function () {
        calc.add(-4);
        calc.subtract(-3);
        expect(calc.get()).to.equal(-1);
    });
    it('Should not add NaNs', function () {
        calc.add("Pesho");
        expect(calc.get()).to.be.NaN;
    });
    it('Should not subtrack NaNs', function () {
        calc.subtract("aPesho");
        expect(calc.get()).to.be.NaN;
    });
    it("Should addString", function () {
        calc.add('3');
        calc.add('5');
        expect(calc.get()).to.equal(8);
    });
    it("Should addString", function () {
        calc.subtract('3');
        calc.subtract('5');
        expect(calc.get()).to.equal(-8);
    });
});