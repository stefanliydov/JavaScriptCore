/**
 * Created by Stefan on 8.6.2017 г..
 */
function CityMarkets(arr) {
    let townProductSalesPrice = new Map();

    for (let row of arr){
        let[town, prod, salesPricePair] = row.split(" -> ").filter(e => e!="");
        let price =salesPricePair.split(' : ').reduce((a,b)=> a*b);



        if(!townProductSalesPrice.has(town)){
            townProductSalesPrice.set(town, new Map());
        }
        if(!townProductSalesPrice.get(town).has(prod)){
            townProductSalesPrice.get(town).set(prod, 0);
        }
        let oldsales = townProductSalesPrice.get(town).get(prod);
        townProductSalesPrice.get(town).set(prod, oldsales+price );

    }
   for(let [town, products] of townProductSalesPrice){
        console.log(`Town - ${town}`);
       for(let [product, price] of products){
           console.log(`$$$${product} : ${price}`);
       }
   }
}
CityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);