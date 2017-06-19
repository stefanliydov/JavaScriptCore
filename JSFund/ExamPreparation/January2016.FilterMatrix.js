function main (matrix){
    "use strict";
  let nSeqGoal = Number(matrix.pop());
    let currSeq = 1;
    matrix = matrix.map(e => e.split(' ').filter(e => e!=""));



    //`[ '0 1', '1 2 0', '0 2 1 0 0 1', '2' ]`
    for(let r =0; r<matrix.length; r++) {

        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c - 1] == undefined) {
                if (r == 0) {
                    continue;
                }
                else {
                    if (matrix[r][c] == matrix[r - 1][matrix[r - 1].length - 1])
                        currSeq++;
                    else
                        currSeq = 1;
                }
            }
            else {
                if (matrix[r][c] == matrix[r][c - 1])
                    currSeq++;

                else
                    currSeq = 1;
            }
            if (currSeq == nSeqGoal) {
                let currR = r;
                let currC = c;
                for (let i = 0; i < nSeqGoal; i++) {

                    matrix[currR][currC] = 'deleted';
                    currC--;
                    if (currC === -1 &&  currR!=0) {
                        currR--;
                        currC = matrix[currR].length - 1;
                    }

                }
                currSeq=1;

            }
        }
    }

    for(let el of matrix){
        el = el.filter(e => e !== 'deleted');
        if(el.length===0)
            console.log('(empty)');
        else{
            console.log(el.join(" "));;
        }
    }
}
main(
    [ '0 1', '1 2 0', '0 2 1 0 0 1', '2' ]
);