/**
 * Created by Stefan on 6.6.2017 г..
 */
function FindNumbers(arr) {
 let finArr = '';
 let regex = /\d+/g;
    for( let sen of arr){
        let result = regex.exec(sen);
        while(result != null){
           finArr+= result+' ';
           result= regex.exec(sen);
        }

    }
    console.log(finArr);
}
FindNumbers([`The300`,`What is that?`,`I think it’s the 3rd movie.`, `Lets watch it at 22:45`]);