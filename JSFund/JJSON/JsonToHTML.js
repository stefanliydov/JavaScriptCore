/**
 * Created by Stefan on 7.6.2017 г..
 */
function ToHTML(jsonArr){
    "use strict";
    let arr = JSON.parse(jsonArr);
    console.log('<table>');

    console.log(`  <tr><th>name</th><th>score</th></tr>`);
  for(let el of arr){

      console.log(`  <tr><td>${htmlEscape(el.name)}</td><td>${Number(el.score)}</td></tr>`);
  }
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/["&'<>]/g, ch => map[ch]);
  }


    console.log('</table>');
}
ToHTML('[{"name":"Pesho & stefan","score":479},{"name":"Gosho","score":205}]')