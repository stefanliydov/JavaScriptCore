/**
 * Created by Stefan on 6.6.2017 г..
 */
function Cap(str) {
    let splited = str.split(' ');
    for(let index in splited) {
        splited[index] = splited[index][0].toUpperCase() + splited[index].substring(1).toLowerCase();

    }
    console.log(splited.join(' '));

}
Cap(`Stefan e dOsta qk bih kazal az`);