function solve(arr){
    "use strict";

    Array.prototype.last = function () {
      console.log(this.length);
    };
    Array.prototype.skip = function (n) {
        let result = [];
        for(let i =n; i<this.length; i++){

            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.take = function (n) {
        let result = [];
        for(let i =0; i<this.length|| i < n; i++){
            result.push(this[i]);
        }
        return result;
    }
    Array.prototype.sum = function () {
        console.log(this.reduce((a,b) => a+b));
    }
    Array.prototype.average = function () {
        return this.sum()/this.length;
    }
    arr.sum()

}
solve([1,2,3,4]);