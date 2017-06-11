/**
 * Created by Stefan on 9.6.2017 г..
 */
function Inventory(arr){
    "use strict";
    let inventory = [];

    for(let currHero of arr){
        let splited = currHero.split(' / ').filter(e=> e!="");
        let name = splited[0];
        let level = Number(splited[1]);
        let items=[];
        if(splited.length>2)
            items = splited[2].split(', ').filter(e => e!="");
        let currObj = {
            name:name,
            level:level,
            items:items
        };
            inventory.push(currObj)
    }
    console.log(JSON.stringify(inventory));
}
