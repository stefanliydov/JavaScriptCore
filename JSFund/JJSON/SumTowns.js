/**
 * Created by Stefan on 7.6.2017 г..
 */
function SumTowns(arr) {
    let towns = {};

    for(let i = 0; i< arr.length; i+=2){
        if(!towns.hasOwnProperty(arr[i]))
            towns[arr[i]] = 0;
        towns[arr[i]] += Number(arr[i+1]);
    }
    return JSON.stringify(towns);
}