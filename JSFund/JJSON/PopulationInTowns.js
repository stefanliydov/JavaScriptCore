/**
 * Created by Stefan on 8.6.2017 г..
 */
function Population(arr) {

    let map = new Map();
    for(let pair of arr){
        let [city, population] = pair.split(' <-> ');

        if(!map.has(city)){
        map.set(city, 0)
        }
        map.set(city, map.get(city) + Number(population));
    }

    for(let [k,v] of map){
        console.log(`${k} : ${v}`);
    }
}
Population([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])