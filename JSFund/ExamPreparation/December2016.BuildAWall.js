/**
 * Created by Stefan on 12.6.2017 г..
 */
function Build(arr) {
    arr = arr.map(Number);
    let concreteUsed = [];
    let pesos =0;

    while (arr.length>0){
        let dayConcrete =0;
        for(let i =0; i<arr.length; i++){
            if(arr[i] == 30){
                arr.splice(i,1);

                i--;
            }
            else{
                dayConcrete+=195;
                arr[i]+=1;
                pesos+=370500;
            }
        }
        if(dayConcrete!=0)

        concreteUsed.push(dayConcrete);
    }
    console.log(concreteUsed.join(', '));
    console.log(pesos+' pesos');
}
Build([ '17' ]);