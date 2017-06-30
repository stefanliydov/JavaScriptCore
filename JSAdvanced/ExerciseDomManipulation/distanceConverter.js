function attachEventsListeners() {
    // TODO: attach click event to convert button
    document.getElementById('convert').addEventListener('click', Convert);

    function Convert() {
        let input = document.getElementById("inputUnits").value;
        let output = document.getElementById("outputUnits").value;
        let toMeters = 0;
        let inputDist = Number(document.getElementById("inputDistance").value);
        let forOutPut = document.getElementById("outputDistance");
        switch (input){
            case 'km':toMeters= inputDist*1000  ;break;
            case 'm':toMeters= inputDist;break;
            case 'cm':toMeters= inputDist/100;break;
            case 'mm':toMeters= inputDist/1000;break;
            case 'mi':toMeters= inputDist*1609.34;break;
            case 'yrd':toMeters= inputDist*0.9144;break;
            case 'ft':toMeters= inputDist*0.3048;break;
            case 'in':toMeters= inputDist*0.0254;break;
        }
        forOutPut.disabled = false;
        switch (output){
            case 'km':forOutPut.value= toMeters/1000  ;break;
            case 'm':forOutPut.value=  toMeters;break;
            case 'cm':forOutPut.value= toMeters*100;break;
            case 'mm':forOutPut.value= toMeters*1000;break;
            case 'mi':forOutPut.value= toMeters/1609.34;break;
            case 'yrd':forOutPut.value=toMeters/0.9144;break;
            case 'ft':forOutPut.value= toMeters/0.3048;break;
            case 'in':forOutPut.value= toMeters/0.0254;break;
        }
    }
}
