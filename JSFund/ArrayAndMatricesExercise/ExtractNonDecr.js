/**
 * Created by Stefan on 1.6.2017 г..
 */
function Exract(arr) {
    let biggest = arr[0];
    console.log(biggest);
    for(let i =1; i<=arr.length-1; i++){
            if(arr[i]<biggest){
                arr.splice(i,0);
            }
            else{
                console.log(arr[i]);
                biggest=arr[i];
            }
    }
}
Exract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24,
])