function Prices(arr) {
    let productList = new Map()
    for(let row of arr){
        let [town, product, price] = row.split(' | ').filter(e=> e !="");
            if(!productList.has(product))
                productList.set(product, new Map());
        productList.get(product).set(town, price);
    }

    for(let [product,cityPrice] of productList){
     let sortedList =  [...cityPrice].sort((a,b) => a[1] -b[1]);
     let townName = sortedList[0][0];
     let price = sortedList[0][1];
      console.log(`${product} -> ${price} (${townName})`);

    }
}
Prices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 1',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])