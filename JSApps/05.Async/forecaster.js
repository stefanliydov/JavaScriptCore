/**
 * Created by Stefan on 1.8.2017 г..
 */
function attachEvents() {
    $("#submit").click(getWeather);

    function getWeather() {

        let location = $("#location");

        let locReq = {
            url:`https://judgetests.firebaseio.com/locations.json`,
            method: "GET",
            success: foreCast,
        };
        $.ajax(locReq);
        function foreCast(data) {
            let forecast = $("#forecast");
            let upcoming =$("#upcoming");
            let current = $("#current");
            forecast.css("display", "inline");

            let code = data.filter(loc => loc.name === location.val());

            if(code.length === 0){
                onError();
            }

            else{
                 code = code[0];

                let currCond = {
                    url: `https://judgetests.firebaseio.com/forecast/today/${code.code}.json`,
                    method: "GET",
                    success: getCurrCond,
                    error: onError
                };


                let threeDay = {
                    url: `https://judgetests.firebaseio.com/forecast/upcoming/${code.code}.json`,
                    method: "GET",
                    success:getThreeDay,
                    error: onError
                };
                $.ajax(currCond);
                $.ajax(threeDay);

            }

            function getCurrCond(data) {

                current.empty();
                current.append($("<div class='label'>Current conditions</div>"));
                current.append($(`<span class="condition symbol">${forecastSymbols(data.forecast.condition)}<span>`));
                current.append($("<span>")
                    .addClass("condition")
                    .append($(`<span class ='forecast-data'>${data.name}</span>`))
                    .append($(`<span class = "forecast-data">${data.forecast.low}${forecastSymbols("Degrees")}/${data.forecast.high}${forecastSymbols("Degrees")}</span>`))
                    .append($(`<span class = "forecast-data">${data.forecast.condition}</span>"`)));
            }

            function getThreeDay(data) {

                upcoming.empty();
                upcoming.append($("<div class='label'>Three-day forecast</div>"));

                upcoming.append($("<span>")
                    .addClass("upcoming")
                    .append($(`<span class = "symbol">${forecastSymbols(data.forecast[0].condition)}</span>"`))
                    .append($(`<span class = "forecast-data">${data.forecast[0].low}${forecastSymbols("Degrees")}/${data.forecast[0].high}${forecastSymbols("Degrees")}</span>`))
                    .append($(`<span class = "forecast-data">${data.forecast[0].condition}</span>`))
               );
                upcoming.append($("<span>")
                    .addClass("upcoming")
                    .append($(`<span class = "symbol">${forecastSymbols(data.forecast[1].condition)}</span>"`))
                    .append($(`<span class = "forecast-data">${data.forecast[1].low}${forecastSymbols("Degrees")}/${data.forecast[1].high}${forecastSymbols("Degrees")}</span>`))
                    .append($(`<span class = "forecast-data">${data.forecast[1].condition}</span>`))
                );
                upcoming.append($("<span>")
                    .addClass("upcoming")
                    .append($(`<span class = "symbol">${forecastSymbols(data.forecast[2].condition)}</span>"`))
                    .append($(`<span class = "forecast-data">${data.forecast[2].low}${forecastSymbols("Degrees")}/${data.forecast[2].high}${forecastSymbols("Degrees")}</span>`))
                    .append($(`<span class = "forecast-data">${data.forecast[2].condition}</span>`))
                );

            }
            function onError() {

                current.empty();
                upcoming.empty();
                current.append($("<div class='label'>Error</div>"));
            }
        }

    }
    function forecastSymbols(cond) {
        switch (cond){
            case "Sunny": return '&#x2600;';
            case "Partly sunny": return '&#x26C5;';
            case "Overcast": return `&#x2601;`;
            case "Rain": return `&#x2614;`;
            case "Degrees": return `&#176;`;
         }
    }


}