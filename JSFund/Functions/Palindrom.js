/**
 * Created by Stefan on 28.5.2017 г..
 */
function Palidrom(word){
    "use strict";
    let palindrom = true;
    for(let i =0; i<=word.length; i++){
            if(word[i] != word[word.length-1-i]) {
                palindrom = false;break;
            }
    }
    return palindrom;
}