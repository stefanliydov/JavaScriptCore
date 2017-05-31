/**
 * Created by Stefan on 28.5.2017 г..
 */
function Aggregate(arr) {
    let sum = 0;
    for(let i =0; i<arr.length; i++){
     sum+= arr[i];
    }
    console.log(sum);
    let revSum = 0;
    for(let i =0; i<arr.length; i++){
    revSum+= (1/arr[i]);
    }
    console.log(revSum);

    let result = "";
        for(let i =0; i<arr.length; i++){
        result+= arr[i];
        }
        return result;
}
console.log(Aggregate([2, 4, 8, 16]));