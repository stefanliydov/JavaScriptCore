/**
 * Created by Stefan on 23.7.2017 г..
 */
let Sumator = require("../SumatorClass");
let expect = require("chai").expect;


describe("Sumator test", function () {
    let myList;
    beforeEach(function () {
        myList = new Sumator();
    });

   describe("hasOwnPropertyTest",function () {
       it("should have an data property",function () {
           expect(myList.hasOwnProperty("data")).to.equal(true);
       });
       it("should have an add property",function () {
           expect(Sumator.prototype.hasOwnProperty("add")).to.equal(true);
       });
       it("should have an sumNums property",function () {
           expect(Sumator.prototype.hasOwnProperty("sumNums")).to.equal(true);
       });
       it("should have an removeByFilter property",function () {
           expect(Sumator.prototype.hasOwnProperty("removeByFilter")).to.equal(true);
       });
       it("should be empty upon start",function () {
           expect(myList.data).to.eql([])
       });
   });
describe("Test add",function () {
    it("Should add element",function () {
        myList.add(5);
        expect(myList.data).to.eql([5])
    });
    it("Should add element",function () {
        myList.add(5);
        myList.add(6);
        expect(myList.data).to.eql([5,6])
    });
    it("Should add objects and stuff",function () {
        myList.add(5);
        myList.add({});
        myList.add("word");
        expect(myList.data).to.eql([5,{},"word"])
    });
});
describe("sumNums",function () {
    it("should return 0 to an empty array",function () {
        expect(myList.sumNums()).to.equal(0)
    });
    it("should return 0 to an empty array",function () {
        myList.add("word");
        myList.add({});
        expect(myList.sumNums()).to.equal(0);
    });
    it("Should return the right sum",function () {
        myList.add(5);
        myList.add(10);
        expect(myList.sumNums()).to.equal(15);
    });
    it("should sum fractions",function () {
        myList.add(5);
        myList.add(10);
        myList.add(5.4);
        myList.add(10.3);
        expect(myList.sumNums()).to.equal(30.7);
    });
    it("should ignore other types",function () {
        myList.add(5);
        myList.add(10);
        myList.add({});
        myList.add("ay");
        myList.add("100");
        expect(myList.sumNums()).to.equal(15)
    });
});
describe("removeByFilter tests",function () {
    it("Should remove filter",function () {
        myList.add(5);
        myList.add(2);
        myList.removeByFilter(x => x===2);
        expect(myList.data).to.eql([5])
    });
    it("Should remove filter",function () {
        myList.add(5);
        myList.add(2);
        myList.add("some");
        myList.add({});

        myList.removeByFilter(x => x===2);
        expect(myList.data).to.eql([5,"some",{}])
    });
    it("Should remove filter",function () {
        myList.add(5);
        myList.add(2);
        myList.add("some");
        myList.add({});

        myList.removeByFilter(x => x=="some");
        expect(myList.data).to.eql([5,2,{}])
    });
    it("Should remove filter",function () {
        myList.add(6);
        myList.add(2);
        myList.add("some");
        myList.add({});

        myList.removeByFilter(x => x%2===0);
        expect(myList.data).to.eql(["some",{}])
    });
    it("Should return an error if no para are passed",function () {
        myList.add(6);
        myList.add(2);
        expect(myList.removeByFilter).throw(Error);
    });
    it("Should remove filter",function () {
        myList.add(6);
        myList.add(2222);
        myList.add("some");
        myList.add({});

        myList.removeByFilter(x => x.length===4);
        expect(myList.data).to.eql([6,2222,{}])
    });
});
describe("Tostring tests",function () {
    it("Should return (empty) if empty",function () {
        expect(myList.toString()).to.equal("(empty)");
    });
    it("Should return separated by , ",function () {
        myList.add(5);
        myList.add("s1");
        myList.add({});
        expect(myList.toString()).to.equal('5, s1, [object Object]');
    })
})


});