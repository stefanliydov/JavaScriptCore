/**
 * Created by Stefan on 26.5.2017 г..
 */
function Convert(a) {
    let degrees = a*90/100;

let result = degrees%360;
if(result<0){
    result = 360+result;
}
    console.log(result);
}
Convert(-50);