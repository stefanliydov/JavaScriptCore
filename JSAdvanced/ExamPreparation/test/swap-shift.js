/**
 * Created by Stefan on 21.7.2017 г..
 */
let createList = require("../Nov2016.AddSwapShiftLeftAndRight")
let expect = require("chai").expect;




describe("Test creaList function", function () {

    let myList;
    beforeEach(function () {
        myList = createList();
    });
    describe("Basic tests",function () {

        it('Should be empty at initialize',function () {
            expect(myList.toString()).to.equal("");
        });
    });
    describe("add tests",function () {
        it("Should work properly",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            expect(myList.toString()).to.equal("2, two, 3");
        });
        it("Should work with adding nothing",function () {
            myList.add();
            expect(myList.toString()).to.equal("")
        });
        it("Should work with adding objects",function () {
            myList.add({v: "a"});
            expect(myList.toString()).to.equal('[object Object]')
        });
    });
    describe("shiftLeft & shiftRight",function () {
        it("should shift left",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('two, 3, 2');
        });
        it("should shift right",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            myList.shiftRight();
            expect(myList.toString()).to.equal('3, 2, two');
        });

        it("should shift left many times",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            myList.shiftLeft();
            myList.shiftLeft();
            myList.shiftLeft();

            expect(myList.toString()).to.equal('2, two, 3');
        });

        it("should shift right many times",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            myList.shiftRight();
            myList.shiftRight();
            myList.shiftRight();
            expect(myList.toString()).to.equal('2, two, 3');
        });
        it("Should do nothing",function () {
            myList.shiftLeft();
            expect(myList.toString()).to.equal("")
        });

        it("Should do nothing",function () {
            myList.shiftRight();
            expect(myList.toString()).to.equal("")
        });
        it("Should one elemnts",function () {
            myList.add(1);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('1')
        });

        it("Should one elemt",function () {
            myList.add(1);

            myList.shiftRight();
            expect(myList.toString()).to.equal('1')
        });
    });
    describe("swap prop",function () {
        it("Should swap",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            myList.add(5);
            expect(myList.swap(1,3)).to.equal(true);
        });

        it("Should swap",function () {
            myList.add(2);
            myList.add("two");
            myList.add(3);
            myList.add(5);
            myList.swap(1,3);
            expect(myList.toString()).to.equal("2, 5, 3, two")
        });
        it("Should return false",function () {
            expect(myList.swap(1,2)).to.equal(false);
        })

        it("Should return false",function () {
            myList.add(1);
            expect(myList.swap(1,2)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            expect(myList.swap(-1,2)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            expect(myList.swap(0,2)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            expect(myList.swap(0,5)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.swap(0,5);
            expect(myList.toString()).to.equal("1, 2, 3, 4");
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            myList.swap(1,1);
            expect(myList.toString()).to.equal("1, 2, 3, 4");
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            expect(myList.swap(1,1)).to.equal(false)

        });
        it("Should return false",function () {
            myList.add(1);
            expect(myList.swap(2,1)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            expect(myList.swap(2,-1)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            expect(myList.swap(2,0)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            expect(myList.swap(5,0)).to.equal(false);

        });
        //######################################
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            expect(myList.swap("pesho",-1)).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            expect(myList.swap(2,"pesho")).to.equal(false);
        });
        it("Should return false",function () {
            myList.add(1);
            myList.add(2);
            myList.add(3);
            myList.add(4);
            expect(myList.swap("pesho",[])).to.equal(false);

        });
    })
});