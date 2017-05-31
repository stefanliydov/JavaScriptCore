/**
 * Created by Stefan on 26.5.2017 г..
 */
function Round(arr) {
    let num = arr[0];
    let precision = arr[1];
    if(precision>15)precision=15;
    let multi = Number(`1${'0'.repeat(precision)}`);
    num =Math.round(num*multi)/multi;

    console.log(num);
}
Round([3.14000000000000, 7]);