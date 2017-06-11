/**
 * Created by Stefan on 7.6.2017 г..
 */
function towns(arr){
    "use strict";
    arr.shift();
    let towns = [];
    for(let el of arr){
        let townTokens = el.split('|').filter(x=> x!=="").map(x=> x.trim());

        let town = {
            Town: townTokens[0],
            Latitude: Number(townTokens[1]),
            Longitude: Number(townTokens[2])
        };
        towns.push(town);
    }
    return JSON.stringify(towns);
}
console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));