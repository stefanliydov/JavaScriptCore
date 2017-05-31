/**
 * Created by Stefan on 28.5.2017 г..
 */
function Calculator(num1, num2, sign) {
    switch (sign){
        case "+":return num1+num2 ;break;
        case "-":return num1-num2;break;
        case "*":return num1*num2;break;
        case "/":return num1/num2;break;
    }
}