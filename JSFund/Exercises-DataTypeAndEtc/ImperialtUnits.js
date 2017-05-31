/**
 * Created by Stefan on 26.5.2017 г..
 */
function Converter(a) {
    var foots = Math.floor(a/12);
    var footies = a%12;
    console.log(`${foots}'-${footies}"`);
}
Converter(47);