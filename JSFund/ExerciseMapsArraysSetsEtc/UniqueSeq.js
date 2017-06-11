/**
 * Created by Stefan on 10.6.2017 г..
 */
function Sequence(arrJSON) {
    let arr = arrJSON.map(x => {
        "use strict";
       return JSON.parse(x);
    })
    let sortedArr= arr.sort((a,b)=> a.length-b.length).map(x=> x.sort((a,b)=> b-a));

   let arr1 = [];
   for(let el of sortedArr){
       let sum = el.reduce((a,b)=> a+b);

       if(!arr1.find(x => x.reduce((a,b) => a+b) ===sum))
           arr1.push(el);
   }
    arr1.forEach(x=> console.log(`[${x.join(", ")}]`));


}
Sequence(
    [ '[7.14, 7.180, 7.339, 80.099]',
        '[7.339, 80.0990, 7.140000, 7.18]',
        '[7.339, 7.180, 7.14, 80.099]' ]

);