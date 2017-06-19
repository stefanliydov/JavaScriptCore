function main(arr){
    "use strict";
    let result =0;
    let currNumbers =[];
    let arrLen = arr.length
    let index = 0;
    for(let i =0; i<arr.length; i++){
        let currData = arr[i];
        if(typeof currData == "number"){

        }
        else{
            if(arr[i-2]!= undefined && arr[i-1] != undefined){

                if(currData == "+"){
                    arr[i-2] = arr[i-2]+arr[i-1];
                }
                else if(currData == "-"){
                    arr[i-2] = arr[i-2]-arr[i-1];
                }
                else if(currData == "*"){
                    arr[i-2] = arr[i-2]*arr[i-1];
                }
                else if(currData == "/"){
                    arr[i-2] = arr[i-2]/arr[i-1];
                }
                arr.splice(i-1,2);
                i-=2;
            }
            else
                 return 'Error: not enough operands!'
        }

    }
    let filteredArr=[]
    if(arr.length===1){
        return arr[0];
    }
    if(typeof arr[0] =="string"){
        return 'Error: not enough operands!'
    }
    if(arr.filter(e=> typeof e == "number").length <= arr.filter(e => typeof e == "string").length){
        return 'Error: not enough operands!';
    }
    else{
        return 'Error: too many operands!';
    }


    return arr[0];
}
console.log(main(
 ['+',5,6]

));