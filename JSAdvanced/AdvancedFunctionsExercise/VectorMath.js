/**
 * Created by Stefan on 2.7.2017 г..
 */
let solution = (function() {
    
    function add(vecA, vecB) {
     return [vecA[0]+vecB[0], vecA[1]+vecB[1]];
    }
    function multiply(vecA, scalar) {
     return [vecA[0] * scalar, vecA[1] * scalar];
    }
    function length(vecA) {
    return Math.sqrt(vecA[0]* vecA[0]+ vecA[1]*vecA[1]);
    }
    function dot(vecA,vecB) {
    return (vecA[0]*vecB[0]+ vecA[1]*vecB[1]);
    }
    function cross(vecA, vecB) {
    return (vecA[0]*vecB[1] - vecA[1] * vecB[0]);
    }
    return { add, multiply, length, dot, cross }
})()
console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));


