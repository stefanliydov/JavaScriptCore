function main (arr){
    "use strict";
    arr = arr.map(Number);

    let maxMulti = Number.MIN_SAFE_INTEGER;
   for(let i =0; i<arr.length; i++){
    let currMulti = 1;
       if(arr[i]<10 && arr[i]>=0){
        for(let r =i+1; r<=i+arr[i]; r++){
            if(arr[r] == undefined)
                continue;
            currMulti*=arr[r];
        }
        if(currMulti >maxMulti){
            maxMulti =currMulti;
        }
       }
   }
    console.log(maxMulti);
}
main([
    '18',
    '42',
    '19',
    '36',
    '1',
    '-297',
    '38',
    '100',
    '9',
    '-249',
    '-170',
    '-18',
    '-208',
    '-11',
    '-87',
    '-90',
    '-286',
    '-27']
);