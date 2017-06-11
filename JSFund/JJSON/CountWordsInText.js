/**
 * Created by Stefan on 7.6.2017 г..
 */
function count(arr) {
 let text = arr.join('\n');
 let textArr = text.split(/[^A-Za-z0-9_]+/)
     .filter(e => e!='');

    let uniqueWordsCount = {};
    for(let i =0; i<textArr.length; i++){
        if(uniqueWordsCount[textArr[i]] == undefined)
            uniqueWordsCount[textArr[i]] = 0;
        uniqueWordsCount[textArr[i]]+=1;
    }
    console.log(JSON.stringify((uniqueWordsCount)));
}
count(['JS devs use Node.js for server-side JS.-- JS for devs'])