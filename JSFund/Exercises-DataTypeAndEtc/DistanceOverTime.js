/**
 * Created by Stefan on 26.5.2017 г..
 */
function Distance(arr) {
    let dist1 = arr[0] * arr[2]/3.6;
    let dist2 = arr[1]* arr[2]/3.6;
    console.log(Math.abs(dist1-dist2));
}
Distance([5, -5, 40])