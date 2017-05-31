/**
 * Created by Stefan on 31.5.2017 г..
 */
function Show(arr) {
    let string = "";
    for(let i = 0; i<arr.length; i+=2){
    string+= arr[i]+" ";
    }
    return string;
}
console.log(Show(['20', '30', '40']));