/**
 * Created by Stefan on 3.6.2017 г..
 */
function Escape(code) {

    let text = '<ul>\n';
   for(let el of code){
       text+= '  <li>';
      let index = el.indexOf('&');

       while(index != -1 ) {
            el.replace('&', '&amp;');

           index = el.indexOf('&');


       }
       let index2 = el.indexOf('\"');
       while (index2 != -1){
           el.replace('\"', '&quot;');
           index2 = el.indexOf('\"', index2++);
       }
       index = el.indexOf('<');
       index2 = el.indexOf('>');
       while(index != -1 || index2 !=-1){
           el.replace('<', '&lt;' );
           el.replace('>', '&gt;');
           index = el.indexOf('<',index++);
           index2 = el.indexOf('>', index++);
       }


       text+= el+'</li>\n';
   }
    text+='</ul>';
    console.log(text);

}
Escape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>'])

