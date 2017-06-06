/**
 * Created by Stefan on 3.6.2017 г..
 */
function table(arr){
    "use strict";
    let town= [];
    let numbers =[]
    for(let el of arr){
     let currArr = el.split('|').filter(e=> e!='');
        town.push(currArr[0].trim());
        numbers.push(currArr[1].trim());
    }
    console.log(town.join(", "));
    console.log(numbers.map(Number).reduce((a, b) => a + b));
}
table(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)