/**
 * Created by Stefan on 13.7.2017 г..
 */
function Solve (arr, sort ){
    "use strict";
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for(let el of arr){
        let [dest , pr, st] = el.split('|');
        tickets.push(new Ticket(dest, pr, st));
    }

    return tickets.sort((a, b) => a[sort] > b[sort]);


}
console.log(Solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));