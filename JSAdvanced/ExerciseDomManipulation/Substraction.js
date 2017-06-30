/**
 * Created by Stefan on 27.6.2017 г..
 */
function subtract() {
   let num1 = Number(document.getElementById('firstNumber').value);
   let num2 = Number(document.getElementById('secondNumber').value);

   document.getElementById('result').textContent= num1-num2;
}
