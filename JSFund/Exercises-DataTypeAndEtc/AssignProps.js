/**
 * Created by Stefan on 26.5.2017 г..
 */
function Props(arr) {

        console.log(typeof(arr[1]));
        var som = JSON.parse(arr[1]);
        console.log(typeof(som));
    }
Props(['ssid', '90127461', 'status', 'admin', 'expires', '600']);

