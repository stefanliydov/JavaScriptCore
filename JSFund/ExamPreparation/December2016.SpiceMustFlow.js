/**
 * Created by Stefan on 12.6.2017 г..
 */
function Spice(spices){
    "use strict";
    spices = Number(spices);
    let dayCount = 0;
    let spicesMined = 0;

    while(spices>=100){
        spicesMined+= spices-26;
        spices -=10;
        dayCount++;
    }
    if(spicesMined>26)
        spicesMined-=26;
    console.log(dayCount);
    console.log(spicesMined);
}
Spice('200');