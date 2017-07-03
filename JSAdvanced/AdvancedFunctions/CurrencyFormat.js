/**
 * Created by Stefan on 1.7.2017 г..
 */
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
function getDollarFormatter(formatter) {

    return function (value) {
        return formatter(',', '$', true, value)
    }
}
let dollars = getDollarFormatter(currencyFormatter);
console.log(dollars(5345));