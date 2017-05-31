/**
 * Created by Stefan on 26.5.2017 г..
 */
function Table(n) {
    let result = '<table border="1">\n';
    for(let i =0; i<=n; i++){
        result+= '<tr>';
        if(i==0)result+="<th>x</th><";
        else result+=`<th>${i}</th>`;
       for(let p =1; p<=n; p++){
           if(i==0){result += `<th>${p}</th>`;}
           else result += `<td>${i*p}</td>`;

}
result+="</tr>\n";
    }
    result+='</table>';
    console.log(result);
}
Table(90);