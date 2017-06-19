/**
 * Created by Stefan on 14.6.2017 г..
 */
function main(arr) {
    let cordArr = arr.pop().split(' ');
    let matrix = [];
    let bunnyDmg = 0;
    let bunnyKills = 0;
    for(let row of arr){
        let tokenArr = row.split(' ').map(Number);
        matrix.push(tokenArr);
    }


    for(let cord of cordArr){
        let [row, col] = cord.split(',').map(Number);
        let bombDmg = matrix[row][col];
        bunnyDmg+= bombDmg;

        if(matrix[row][col] == 0)
            continue;
        for(let r =row-1; r<=row+1; r++){
            for(let c =col-1; c<=col+1; c++){
                if(matrix[r] != undefined) {
                    if (matrix[r][c] != undefined) {
                        matrix[r][c] - bombDmg >= 0 ? matrix[r][c] = matrix[r][c] - bombDmg : matrix[r][c] = 0;

                    }
                }
            }
        }
        bunnyKills++;
    }

    for(let r = 0; r<matrix.length; r++){
        for(let c = 0; c<matrix[r].length; c++){
        if(matrix[r][c]> 0){
            bunnyDmg+= matrix[r][c];
            bunnyKills++;
        }
        }
    }



   console.log(bunnyDmg);
    console.log(bunnyKills);

}
main(
    [ '10 10 10', '10 10 10', '10 10 10', '0,0 0,1' ]

)