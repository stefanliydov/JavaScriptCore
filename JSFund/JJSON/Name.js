/**
 * Created by Stefan on 8.6.2017 г..
 */
function solve(string){
    let regex = /\d{1,1000}/g;
 let text = '';
    for(let el of string){
        let match = regex.exec(el);

    while (match !== null) {
        text+= match+ ' ';
        match = regex.exec(el);
    }

    }
    console.log(text);
}
solve(  ['The300',
        'What is that?',
        'I think it’s the 3rd movie.',
        'Lets watch it at 22:45',
]);