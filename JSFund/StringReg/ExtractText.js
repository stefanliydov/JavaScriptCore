/**
 * Created by Stefan on 3.6.2017 г..
 */
function Extract(text) {

    let result = [];
    let openInd = text.indexOf("(");
    while(openInd !== -1){
        let endInd = text.indexOf(")", openInd+1);
        if( endInd == -1)break;
        result.push(text.substring(openInd+1, endInd));
        openInd = text.indexOf("(", endInd+1);

    }
    return result.join(", ");
}