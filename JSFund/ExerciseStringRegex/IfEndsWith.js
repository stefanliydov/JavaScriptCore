/**
 * Created by Stefan on 6.6.2017 г..
 */
function Ends(str, substring) {

     return str.lastIndexOf(substring)==str.length- substring.length ? 'true': 'false';

}
console.log((Ends(`This sentence ends with fun?`,
    `fun?`)));