function Solve(arr) {

    function reduce(arr, func) {
        let result = arr[0];
        for(let nextElement of arr.slice(1))
            result = func(result,nextElement)
        return result
    }


    console.log(`Sum = ${reduce(arr, (a,b) => Number(a) + Number(b))}`);
    console.log(`Max = ${reduce(arr, (a,b) => Math.max(a,b))}`);
    console.log(`Min = ${reduce(arr, (a,b) => Math.min(a,b))}`);
    console.log(`Product = ${reduce(arr,(a,b) =>a*b)}`);
    console.log(`Join = ${reduce(arr, (a,b) =>' '+ a + b)}`);
}
Solve([5, -3, 20, 7, 0.5]);