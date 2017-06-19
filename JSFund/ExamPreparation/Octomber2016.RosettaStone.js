function main(arr) {
    arr=arr.map(e=> e.split(' ')).map(e => e.map(Number));
    let rows = Number(arr.shift());
    let matrixTemplate= [];
    for(let i =0; i<rows; i++){
    matrixTemplate.push(arr.shift());
    }

    for(let r =0; r<arr.length; r+=rows){

     for(let c =0; c<arr[r].length; c +=matrixTemplate[0].length){


        for(let templateRow =0; templateRow<matrixTemplate.length; templateRow++){

            for(let templateCol =0; templateCol<matrixTemplate[templateRow].length; templateCol++){
                if(arr[templateRow+r] == undefined)
                    continue;
                if(arr[templateRow+r][templateCol+c] == undefined)
                    continue;
                let oldNum =arr[templateRow+r][templateCol+c];
                let toSumNum=matrixTemplate[templateRow][templateCol];
                arr[templateRow+r][templateCol+c]=
                    ((oldNum+toSumNum)%27)+64==64 ? " ":
                        String.fromCharCode(((oldNum+toSumNum)%27)+64);
            }
        }
     }
    }
    console.log(arr.map(e=> e.join('')).join(''));
}
main([ '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14' ]
)