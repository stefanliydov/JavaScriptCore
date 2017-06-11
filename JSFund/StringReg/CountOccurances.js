/**
 * Created by Stefan on 3.6.2017 г..
 */
function Solve(str, text) {

    let count = 0;
    let index = text.indexOf(str);
    while (index != -1){
        count++;
        index++;
        index = text.indexOf(str,index);
    }
    return count;
}