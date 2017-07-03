let solve = (function () {
    let sum =0;

    return function add(num) {

        sum+= num;
        add.toString = function () {
            return sum;
        }
        return add
    }
})()
console.log(solve(1)(6)(-3).toString());