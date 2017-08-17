function solve() {
    let stopDepotId ="depot";
    let name;

    function depart() {
        $("#depart").prop("disabled", true);
        $("#arrive").prop('disabled', false);
        let req = {
            url: `https://judgetests.firebaseio.com/schedule/${stopDepotId}.json`,
            method: "GET",
            success: departBus
        };
        $.ajax(req);

    }
    function arrive() {
        $("#depart").prop("disabled", false);
        $("#arrive").prop('disabled', true);
        $("#info").find("span").text(`Arriving at ${name}`);

    }
   function departBus(data){
        name = data.name;
    let next = data.next;
       $("#info").find("span").text(`Next stop ${name}`);
    stopDepotId = next;

    }

    function arriveBus(data) {

    }
    return {
        depart,
        arrive
    };
}
let result = solve();