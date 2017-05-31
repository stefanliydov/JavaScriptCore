/**
 * Created by Stefan on 26.5.2017 г..
 */
function Converter(a) {
    var s = a;    // my binary "number" as a string
    var dec = 0;
    for( let i=0; i<s.length; i++ ) {
        // we start with the least significant digit, and work our way to the left
        if( s[s.length-i-1] == '0' ) continue;
        dec += Number(Math.pow( 2, i ));
    }
    console.log(dec);
}
Converter("00001001");