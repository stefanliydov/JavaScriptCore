/**
 * Created by Stefan on 1.6.2017 г..
 */
function RotateArray(arr) {
    let rotates = arr[arr.length-1]%(arr.length-1);
    arr.pop();

    for(let i =0; i<rotates; i++){
        let temp = arr[arr.length-1];
        arr.pop();
        arr.unshift(temp);
    }
    return arr.join(' ');
}
console.log(RotateArray([1,
    2,
    3,
    4,
    2,
]));