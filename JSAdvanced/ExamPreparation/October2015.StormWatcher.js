/**
 * Created by Stefan on 18.7.2017 г..
 */
    let Record = (function () {
        let id =0;

        return class Record {
            constructor(temp, humidity, pressure, windSpeed) {
                this.id = id++;
                this.temperature = temp;
                this.humidity = humidity;
                this.pressure = pressure;
                this.windSpeed = windSpeed;

            }

            get status() {
                if ((this.temperature < 20) && (this.pressure < 700 || this.pressure > 900) && (this.windSpeed > 25)) {
                    return "Stormy";
                }
                return "Not stormy";
            }

            toString() {
                return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.status}`;
            }
        }

    })();

let record1 = new Record(32, 66, 760, 12);
let report1 = record1.toString();
console.log(report1);
let record2 = new Record(10, 40, 680, 30);
let report2 = record2.toString();
//console.log(report2);
