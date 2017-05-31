/**
 * Created by Stefan on 28.5.2017 г..
 */
function ToUpper(words) {
let toUpper = words.toUpperCase();

toUpper = toUpper.split(/\W+/);
    toUpper = toUpper.filter(w=> w!="");
    return toUpper.join(', ')
}
console.log(ToUpper("Hi, how are you?"));