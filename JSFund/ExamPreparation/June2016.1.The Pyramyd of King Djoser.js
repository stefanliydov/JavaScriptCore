function main(base, increment){
    "use strict";
    increment = Number(increment);
    let stone = 0;
    let marble = 0;
    let lapisLazuli =0;
    let gold =0;
    let height =0;
    while(base > 0){
        height++;
       if(base === 1 || base ===2){
            gold+= (base*base)*increment;
        }

        else if(height%5===0){
            let currStone = (base - 2) * (base - 2);
            lapisLazuli += ((base * base) - currStone) * increment;
            stone += currStone * increment;

        }

        else {
            let currStone = (base - 2) * (base - 2);
            marble += ((base * base) - currStone) * increment;
            stone += currStone * increment;

        }
        base-=2;



    }
height*=increment;
    console.log("Stone required: "+Math.ceil(stone));
    console.log("Marble required: "+Math.ceil(marble));
    console.log("Lapis Lazuli required: "+Math.ceil(lapisLazuli));
    console.log("Gold required: "+Math.ceil(gold));
    console.log("Final pyramid height: "+Math.floor(height));
}
main(11,
    1
)