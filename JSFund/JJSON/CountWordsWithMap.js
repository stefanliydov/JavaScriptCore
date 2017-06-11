/**
 * Created by Stefan on 8.6.2017 г..
 */
function count (textArr ){
    "use strict";
    let  text = textArr.join('\n');
    let wordArr = text.split(/[^A-Za-z0-9_]+/).filter(e => e !='');

    let map = new Map();

    for(let word of wordArr){
        word = word.toLowerCase()
        if(!map.has(word)){
            map.set(word,0);
        }
        map.set(word , map.get(word)+1 );
    }


    for (let [k,v] of [...map].sort())
        console.log(`'${k}' -> ${v} times`)

}
count([`Far too slow, you're far too slow.`]);