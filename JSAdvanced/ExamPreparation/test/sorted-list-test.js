/**
 * Created by Stefan on 18.7.2017 г..
 */
    let expect = require('chai').expect;
    let SortedList = require('../October2016.SortedList');

    describe("Sorted List Unit Tests", function () {
        let myList;
        beforeEach(function () {
            myList = new SortedList();
        });

        describe("Test initial state", function () {
            it('add exist', function () {
                expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
            })
            it('remove exist', function () {
                expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
            })
            it('get exist', function () {
                expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
            })
            it('size exist', function () {
                expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
            })
        });
        describe("Test add", function () {
            it("with one element",function () {
                myList.add(5);
                expect(myList.list.join(', ')).to.equal('5', "List did not add correctly");
            });
            it("with more element",function () {
                myList.add(5);
                myList.add(3);
                myList.add(2);
                expect(myList.list.join(', ')).to.equal('2, 3, 5', "List did not add/sort correctly");
            });
        });
        describe("Test remove", function () {
           it("with empty list", function () {
               expect(() => myList.remove()).throw(Error, "Collection is empty.")
           });
           it('with negative index', function () {
               myList.add(3);
               expect(() => myList.remove(-1)).throw(Error, "Index was outside the bounds of the collection.");
           });
            it('with index equal to list.length', function () {
                myList.add(3);
                expect(() => myList.remove(1)).throw(Error, "Index was outside the bounds of the collection.")
            });
            it('with index bigger than list.length', function () {
                myList.add(3);
                expect(() => myList.remove(2)).throw(Error, "Index was outside the bounds of the collection.")
            });
            it('with index should remove', function () {
                myList.add(1);
                myList.add(2);
                myList.add(3);
                myList.remove(0);
                expect(myList.list.join(', ')).to.equal('2, 3');
            });
        });
        describe('Test get', function () {
            it("with empty list", function () {
                expect(() => myList.get()).throw(Error, "Collection is empty.")
            });
            it('with negative index', function () {
                myList.add(3);
                expect(() => myList.get(-1)).throw(Error, "Index was outside the bounds of the collection.");
            });
            it('with index equal to list.length', function () {
                myList.add(3);
                expect(() => myList.get(1)).throw(Error, "Index was outside the bounds of the collection.")
            });
            it('with index bigger than list.length', function () {
                myList.add(3);
                expect(() => myList.get(2)).throw(Error, "Index was outside the bounds of the collection.")
            });
            it('with index should get', function () {
                myList.add(1);
                myList.add(2);
                myList.add(3);
                let get = myList.get(1);
                expect(get).to.equal(2);
            });
        });
        describe('Test size', function () {
            it('with empty list', function () {
                expect(myList.size).to.equal(0, "List not empty");
            })
            it('with full list',function () {
                myList.add(1);
                myList.add(2);
                myList.add(3);
                expect(myList.size).to.equal(3);
            })
        })

    });
