/**
 * Created by Stefan on 15.6.2017 г..
 */
function main(arr) {
    arr = arr.filter(e => e != "");
    let courseAverage = arr.pop().trim();
    let count = 0;
    let forAverage = 0;
    for(let el of arr){
        let  [name, subject, examPoints,courseBonus] = el.split(/\s+/g).filter(e=> e!="");

        let coursePoints = Number(examPoints)/5 + Number(courseBonus);
        let grade = ((coursePoints/80)*4)+2;
        if(grade > 6.00){
            grade =6.00;
        }
        if(subject == courseAverage){
            count++;
            forAverage+=Number(examPoints);
        }
        if(Number(examPoints)<100){
            console.log(`${name} failed at "${subject}"`);
            continue;
        }
        console.log(`${name}: Exam - "${subject}"; Points - ${parseFloat(coursePoints.toFixed(2))}; Grade - ${grade.toFixed(2)}`);
    }
    console.log(`"${courseAverage}" average points -> ${parseFloat((forAverage/count).toFixed(2))}`);
}
main([
    '            Bankin    HTML&CSS                0          0',
    '    RoYaL        HTML5&CSS        340         10',
    'Bi0GaMe      Java   10    10',
    '        Stamat HQC   190 10',
    'MINKA OOP   230 10',
    'Java  '
    ]

)