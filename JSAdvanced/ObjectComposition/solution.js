/**
 * Created by Stefan on 4.7.2017 г..
 */
function getModel() {
    let input1, input2, result;
    function init(num1Sel, num2Sel, resultSel) {
        input1 = $(num1Sel);
        input2 = $(num2Sel);
        result = $(resultSel);
    }
    function add() {
        result.val(Number(input1.val()) + Number(input2.val()));
    }
    function subtract() {
        result.val(Number(input1.val()) - Number(input2.val()));
    }
    return{
        init,
        add,
        subtract
    }
}