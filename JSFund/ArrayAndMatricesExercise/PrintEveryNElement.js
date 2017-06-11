/**
 * Created by Stefan on 1.6.2017 г..
 */
function PrintNEl(arr) {

    for(let i =0; i<arr.length-1; i+=Number(arr[arr.length-1])){
        console.log(arr[i]);
    }
}
PrintNEl([5,
    20,
    31,
    4,
    20,
    2
]);