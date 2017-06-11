/**
 * Created by Stefan on 3.6.2017 г..
 */
function MagicMatrix(arr) {

    let magic = true;
    let magSum = getMagicNumber(arr);


    for(let i =0; i<arr[0].length; i++){
          let currSum= arr[0].reduce((a,b)=>a +b[i],0);
        console.log(currSum);
    }



    return magic;

function getMagicNumber(arr) {
    let magSum =0;
    for(let i =0; i<arr.length; i++){
        magSum+= arr[i][0];
    }
    return magSum;
}
}
console.log(MagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]


));