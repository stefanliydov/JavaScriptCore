/**
 * Created by Stefan on 26.5.2017 г..
 */
function LastMonth(arr) {
    let day = arr[0];
    let month = arr[1];
    let year= arr[2];

    let date = new Date(year, month-1, 1-1);

    console.log(date.getDate());
}
LastMonth([13, 12, 2004]);