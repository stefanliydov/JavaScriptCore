/**
 * Created by Stefan on 1.6.2017 г..
 */
function ArrayWithDelimer(arr) {
    let delimer = arr[arr.length-1];
    arr.pop();
    return arr.join(delimer);


}
console.log(ArrayWithDelimer(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
));