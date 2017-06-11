/**
 * Created by Stefan on 10.6.2017 г..
 */
function Company(arr) {
    let cars = new Map();

    for(let row of arr){
        let[brand, model, quantity] = row.split(' | ').filter(x => x!= "");

        quantity = Number(quantity);

        if(!cars.has(brand))
            cars.set(brand, new Map());
        if(!cars.get(brand).has(model))
            cars.get(brand).set(model, 0);
        cars.get(brand).set(model, cars.get(brand).get(model)+quantity);

    }
    for(let [brand, modelsQuantity] of cars ){
        console.log(brand);

        for(let [model, quantity] of modelsQuantity){
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
Company([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'

])