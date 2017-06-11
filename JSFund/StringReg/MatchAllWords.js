/**
 * Created by Stefan on 4.6.2017 г..
 */
function MatchWords(str) {
    let regex = /\w+/g;
   let arr = str.match(regex);
   return arr.join('|');
}
console.log(MatchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));