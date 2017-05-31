/**
 * Created by Stefan on 26.5.2017 г..
 */
function Calculate(arr) {
    let p = arr[0];
    let i = arr[1];
    let n = 12/arr[2];
    let t = arr[3];

    let result = p*((1+(i/100)/n)**(n*t));
    console.log(Math.round(result*100)/100);


}
Calculate([1500, 4.3, 3, 6]);