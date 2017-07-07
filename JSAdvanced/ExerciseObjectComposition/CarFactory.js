function solve(fatherCar) {
    let car = {}
    car.model = fatherCar.model;
    if(fatherCar.power <= 90)
        car.engine = { power: 90, volume: 1800 }
        else if(fatherCar.power<=120)
        car.engine = { power: 120, volume: 2400 };
    else
        car.engine = { power: 200, volume: 3500 };

    car.carriage = {
        type:fatherCar.carriage,
        color: fatherCar.color
    };
    let wheels = fatherCar.wheelsize;
    if(wheels%2===0){
        wheels--;
    }
    car.wheels = [wheels,wheels,wheels,wheels];
    return car;
}

let fatherCar= { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }



console.log(solve(fatherCar));