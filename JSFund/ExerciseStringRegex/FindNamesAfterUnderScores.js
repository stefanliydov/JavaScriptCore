/**
 * Created by Stefan on 6.6.2017 г..
 */
function FindStuff(str) {
    let regex = /\b(?:_)([a-zA-Z0-9]+)\b/g;
    let arr = str.match(regex);

    for(let i =0; i<arr.length; i++){
    arr[i] = arr[i].substring(1);
    }
    console.log(arr.join(','));

}
FindStuff(`The _id and _age variables are both integers.`);