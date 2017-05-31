/**
 * Created by Stefan on 26.5.2017 г..
 */
function DistanceIn3D(arr) {
    let dist = Math.sqrt(Math.pow(arr[0] - arr[3],2)+Math.pow(arr[1]-arr[4],2)+Math.pow(arr[2] -arr[5],2));
    console.log(dist);
}
DistanceIn3D([1, 1, 0, 5, 4, 0])