/**
 * Created by Stefan on 31.5.2017 г..
 */
function DNA(num) {
    var seq = 'ATCGTTAGGG';
    let index = -1;
    for(let i =1; i<=num; i++){
        index = CheckIndex(++index, seq.length);
           let firstSeq =seq.charAt(index);
        index = CheckIndex(++index, seq.length);
        let secSeq=seq.charAt(index);

        if(i%4==1)
            console.log(`**${firstSeq+secSeq}**`);
        else if(i%4==2 ||i%4==0)
            console.log(`*${firstSeq}--${secSeq}*`);
        else if(i%4==3)
            console.log(firstSeq+`----`+secSeq);

    }
    function CheckIndex(index,seqLen) {
        if(index>= seqLen){
            index=0;
        }
        return index;
    }
}
DNA(10)