/**
 * Created by Stefan on 3.7.2017 г..
 */
function algorithm(num1, num2) {
    while(Math.max(num1, num2)/2 !== Math.min(num1,num2)){
       let bigger = Math.max(num1, num2);
       let smaller =Math.min(num1,num2);
       num1 = bigger;
       num2 = smaller;
        num1 -=num2;
    }
    return Math.min(num1,num2);
}
console.log(algorithm(45, 25));