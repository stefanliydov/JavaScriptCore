/**
 * Created by Stefan on 19.7.2017 г..
 */
let list = require('../November2016.AddDeleteFromList');
let expect = require('chai').expect;


describe("Testing list",function () {
    let myList;
    beforeEach(function () {
        myList =list;
    });
    it("Should return an empty array",function () {
        expect(myList).to.equal([]);
    });

    describe("Test add command", function ()  {
        it("should exist",function () {
           expect(myList.hasOwnProperty('add')).to.equal(true)
        });
        it("should work properly", function () {
            myList.add(5);
            expect(myList.toString()).to.equal("5", "IT IS NOT ATTAWORKING");
        });
    });
    describe("Test delete command", function () {
        it("should exist",function () {
            expect(myList.hasOwnProperty('delete')).to.equal(true)
        });
        it("should remove at a valid index",function () {
            myList.add(5);
            myList.add(1);
            myList.add(2);
            expect(myList.delete(1)).to.equal(1)
        })
        it("should give undefined for invalid index",function () {
            myList.add(5);
            myList.add(1);
            myList.add(2);
            expect(myList.delete(-1)).to.equal(undefined)
        })
        it("should return undefined for equal to length", function () {
          myList.add(12);

            expect(myList.delete(6)).to.equal(undefined);
        })
        it("should return undefined for bigger than length", function () {

            expect(myList.delete(12)).to.equal(undefined);
        })
        it("should delete", function () {
            myList.delete(0);
            expect(myList.toString()).to.equal(`2, 5, 1, 2, 12`);
        })
        it("index should be int",function () {
            expect(myList.delete('dw')).to.equal(undefined);
        })
        it("should exist",function () {
            expect(myList.hasOwnProperty('delete')).to.equal(true)
        });

    })
});
