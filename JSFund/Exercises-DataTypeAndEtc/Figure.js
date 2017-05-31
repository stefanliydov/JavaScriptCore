/**
 * Created by Stefan on 26.5.2017 г..
 */
function Draw(n ) {
    if(n>2){
    console.log(`+${"-".repeat(n-2)}+${"-".repeat(n-2)}+`);
let oddEven = n%2==0? n-1:n;
    for(let i =1; i<=(oddEven-3)/2; i++){
        console.log(`|${" ".repeat(n-2)}|${" ".repeat(n-2)}|`);
    }
    console.log(`+${"-".repeat(n-2)}+${"-".repeat(n-2)}+`);

    for(let i =1; i<=(oddEven-3)/2; i++){
        console.log(`|${" ".repeat(n-2)}|${" ".repeat(n-2)}|`);
    }
    console.log(`+${"-".repeat(n-2)}+${"-".repeat(n-2)}+`);}
    else console.log('+++');

}
Draw(2);