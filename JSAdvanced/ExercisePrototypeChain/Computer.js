function createComputerHierarchy() {
    //TODO

    class Keyboard{
        constructor(manufacturer,responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer =manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer=manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer{
        constructor(manufacturer,processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new TypeError("Error");
            }
            this.manufacturer=manufacturer;
            this.processorSpeed =processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer{

        constructor(manufacturer,processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer,processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }

        set battery(value) {
            if(value instanceof Battery){
                this._battery = value;
            }
            else
                throw new TypeError("Value is not an instance of Battery")
        }
    }
    class Desktop extends Computer{

        constructor(manufacturer,processorSpeed, ram, hardDiskSpace,keyboard, monitor){
            super(manufacturer,processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if(value instanceof Keyboard)
            this._keyboard = value;
            else
                throw new TypeError("Value is not an instance of Keyboard")        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if(value instanceof Monitor)
            this._monitor = value;
            else
                throw new TypeError("Value is not an instance of Monitor")
        }
    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
let lap = new Laptop();
console.log(lap);