/**
 * Created by Stefan on 3.6.2017 г..
 */
function array(arr) {
    return Array.from(arr.join('')).reverse().join('');
}
console.log(array(['I', 'am', 'student']));