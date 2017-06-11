/**
 * Created by Stefan on 7.6.2017 г..
 */
function Transform(jsonArr){
    "use strict";
    console.log('<table>');
    let arr = JSON.parse(jsonArr);
    let text = '  <tr>';
    for(let el in arr[0]){
        text+=`<th>${htmlEscape(el)}</th>`;
    }
    text += '</tr>';
    console.log(text);

    for(let obj of arr){
        text= '  <tr>';
        for(let el in obj){


            text+= `<td>${htmlEscape(obj[el])}</td>`
        }
        text+= '</tr>';
        console.log(text);
    }
    function htmlEscape(text) {
        if(isNaN(text)) {
            let map = {
                '"': '&quot;', '&': '&amp;',
                "'": '&#39;', '<': '&lt;', '>': '&gt;'
            };
            return text.replace(/["&'<>]/g, ch => map[ch]);
        }
        else return text;
        }






    console.log('</table>');

}
Transform('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'
)