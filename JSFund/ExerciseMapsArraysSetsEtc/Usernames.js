/**
 * Created by Stefan on 10.6.2017 г..
 */
function Username(arr) {

    let set = new Set();
    for(let el of arr){
        set.add(el);
    }
    for(let el of [...set].sort(Compare))
    {
        console.log(el);
    }
    function Compare(a,b) {
    if(a.length> b.length)
        return 1;
    else if(a.length<b.length)
        return -1;
    else{
        if(a>b)
            return 1;
        else if(a<b)
            return -1;
        else
            return 0;
    }
    }
}
Username([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'

])