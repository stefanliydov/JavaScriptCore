function result() {

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new TypeError("Can't be invoked");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let currTask = this.tasks.shift();
            console.log(this.name + currTask);
            this.tasks.push(currTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a simple task.');
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.divident = 0;
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.divident;
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}
result = result();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);
guy3.salary = 30
guy3.divident = 40
console.log();
guy3.work()
guy3.work()
guy3.work()