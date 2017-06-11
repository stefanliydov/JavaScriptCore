/**
 * Created by Stefan on 1.6.2017 г..
 */
function Sort(arr) {

    console.log(arr.sort(compare).join('\n'));
    function compare(a,b) {
        if( a.length < b.length){
            return -1;
        }
        else if( a.length> b.length){
            return 1;
        }
        else{
            if(a<b){
                return -1;
            }
            else if( a>b){
                return 1;
            }
            else{
                return 0;
            }
        }


    }
}
Sort(['aplha', 'beta','gamma']);