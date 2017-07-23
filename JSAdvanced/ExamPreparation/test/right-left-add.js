let makeList = require('../December2016.AddLeftAddRightAndClear');
let expect = require('chai').expect;

describe("Testing makeList function",function () {
    let list;
    beforeEach(function () {
        list = makeList();
    });
        it("Should be object",function () {
            expect(typeof list).to.equal("object")
        })
        it("Should exist", function () {
            expect(list.hasOwnProperty("addLeft")).to.equal(true);

        });
        it("Should add to the begging",function () {
            list.addLeft(5);
            list.addLeft(4);
            list.addLeft(3);
            expect(list.toString()).to.equal("3, 4, 5")
        });


        it("should exist",function () {
            expect(list.hasOwnProperty('addRight')).to.equal(true)
        });
        it("Should add to the end of the list",function () {
            list.addRight(1);
            list.addRight(2);
            list.addRight(3);
            expect(list.toString()).to.equal("1, 2, 3");
        } );


        it("should exist",function () {
            expect(list.hasOwnProperty('clear')).to.equal(true);
        });
        it("Should clear list",function () {
            list.addRight(1);
            list.addRight(2);
            list.addRight(3);
            list.addLeft(4);
            list.addLeft(3);
            list.clear();
            expect(list.toString()).to.equal("");
        });




        it("Should work properly",function () {
            list.addRight(1);
            list.addRight(2);
            list.addRight(3);
            list.addLeft(0);
            list.addRight(4);
            expect(list.toString()).to.equal("0, 1, 2, 3, 4")
        })

});

console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount); peter.addScore(450);


peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);


peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);