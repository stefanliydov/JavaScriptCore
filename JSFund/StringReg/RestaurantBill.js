/**
 * Created by Stefan on 3.6.2017 г..
 */
function Bill(arr) {
    let products = arr.filter((e,i) => i%2==0 ).join(", ");
    let bill = arr.filter((e,i)=> i%2!=0).map(Number).reduce((a,b) => a + b);
    console.log(`You purchased ${products} for a total sum of ${bill}`);
}
Bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);