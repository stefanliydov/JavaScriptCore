/**
 * Created by Stefan on 7.6.2017 г..
 */
function FindOccur(str, find) {
    let regex = new RegExp(`\\b${find}\\b`,'gi');
    let arr = str.match(regex);
    return arr != null ? arr.length: 0;
}
console.log(FindOccur(`There was one. Therefore I bought it. I wouldn’t buy it otherwise.`,
    `there`
));