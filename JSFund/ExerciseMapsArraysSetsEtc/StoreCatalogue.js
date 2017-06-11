/**
 * Created by Stefan on 10.6.2017 г..
 */
function Catalogue(arr) {
    let catalogue = new Map();
    for(let row of arr) {
        let [product, price] = row
            .split(' : ')
            .filter(e => e != "");

        catalogue.set(product, Number(price));
    }
    let letter ='';

    for(let product of [...catalogue].sort()){
        if(letter!=product[0][0]){
            letter = product[0][0];
            console.log(letter);
        }
            console.log(`  ${product[0]}: ${product[1]}`);
    }
}
Catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])