/**
 * Created by Stefan on 4.6.2017 г..
 */
function split(text) {
   let arr= text.split(/[(),.; ]+/).filter(x=> x!="");
     arr.forEach(x=> console.log(x));
}
split('let sum = 4 * 4,b = "wow";');