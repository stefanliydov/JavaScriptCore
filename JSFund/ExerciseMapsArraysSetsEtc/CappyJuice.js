/**
 * Created by Stefan on 10.6.2017 г..
 */
function Juice(arr){
    "use strict";
    let tempJuiceMap = new Map();
    let resultMap = new Map();

    for( let row of arr){
        let [name, quantity] = row
            .split(" => ")
            .filter(e => e !="");

        if(!tempJuiceMap.has(name))
            tempJuiceMap.set(name, Number(quantity));
        else
            tempJuiceMap.set(name, tempJuiceMap.get(name) +Number(quantity));

        if(tempJuiceMap.get(name) >=1000){
         let [bottle, juice] = FindBottles(tempJuiceMap.get(name));
            if(!resultMap.has(name))
                resultMap.set(name, bottle);
            else
                resultMap.set(name, resultMap.get(name) + bottle);
            tempJuiceMap.set(name, juice);
        }
    }

    [...resultMap].forEach(f => {
        console.log(f[0]+' => '+ f[1]);
    })


    function FindBottles(num) {
        let bottles = 0;
        let juice = 0;
        while(num>=1000){
            num-=1000;
            bottles+=1;
        }
        juice = num;

        return [bottles, juice];
    }
}
Juice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'

])