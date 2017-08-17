/**
 * Created by Stefan on 28.7.2017 г..
 */
function getInfo() {
    let busStopId = $("#stopId").val();
    console.log(busStopId);
    let req={
        url: `https://judgetests.firebaseio.com/businfo/${busStopId}.json`,
        method: "GET",
        success: displayBuses,
        error: onError
    };
$.ajax(req);
    let container = $("#buses");
    let stopName = $("#stopName")
    function displayBuses(data) {
        let name = data.name;
        stopName.text(name);
        let buses = data.buses;
        container.empty();
        for(let bus in buses){
           let li = $("<li>").text(`Bus ${bus} arrives in ${buses[bus]}`);
           container.append(li);
        }

    }
    function onError(err) {
        stopName.text("Error")
        container.empty();
    }
}