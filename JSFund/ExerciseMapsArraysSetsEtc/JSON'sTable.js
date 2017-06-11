/**
 * Created by Stefan on 10.6.2017 г..
 */
function Table(arr) {
    console.log('<table>');
    for(let row of arr){
        let jsonRow = JSON.parse(row);
        console.log('	<tr>');
        console.log(`		<td>${jsonRow.name}</td>`)
        console.log(`		<td>${jsonRow.position}</td>`)
        console.log(`		<td>${jsonRow.salary}</td>`)
        console.log('	<tr>');
    }
    console.log('</table>');
}
Table([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]
)