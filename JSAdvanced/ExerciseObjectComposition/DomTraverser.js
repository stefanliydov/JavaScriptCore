function subsum(arr, startIn, endIn) {
    if(!Array.isArray(arr))
        return NaN;

    if( startIn <0)
        startIn = 0;
    if(endIn >= arr.length)
        endIn = arr.length-1;
    let sum = 0;
    for(let i =startIn; i<= endIn; i++){
        sum+= Number(arr[i]);
    }
    return sum;
}
