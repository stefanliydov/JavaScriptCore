/**
 * Created by Stefan on 4.6.2017 г..
 */
function dates(strArr) {
    let dateFormat = /(\b\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let result = dateFormat.exec(strArr);
    while(result !== null){
        let [date,day, month, year] = result;

        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`)
        result =dateFormat.exec(strArr);
    }
}
dates(`1-Jan-1999 is a valid date.
    So is 01-July-2000.
I am an awful liar, by the way – Ivo, 28-Sep-2016.`
)