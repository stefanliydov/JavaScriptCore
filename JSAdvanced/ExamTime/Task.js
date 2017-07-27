/**
 * Created by Stefan on 23.7.2017 г..
 */
class Task {
    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
        this.isOverdue;
    }

    constructor(title, deadline){
        this.title = title;
        this.status = "Open";
        this.deadline = deadline;
        this.isOverdue = "false";
    }
    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if(value < new Date()){
            throw new Error("Past Date");
        }

        this._deadline = value;
    }

    get isOverdue() {
        return this._isOverdue;
    }

    set isOverdue(value) {
        if(this.deadline <= new Date() && this._status !== "Complete"){
            this._isOverdue = "true";
        }
        else {
            this._isOverdue = "false";
        }

    }

    comparator(a,b){
        if(a.isOverdue === true && b.isOverdue === true){
            return a.deadline - b.deadline;
        }
        if(a.isOverdue === true){
            return -1
        }
        if(b.isOverdue === true){
            return 1
        }


        if(a.status === "In Progress" && b.status === "In Progress"){
            return a.deadline - b.deadline;
        }
        if(status === "In Progress" === true){
            return -1
        }
        if(status === "In Progress" === true){
            return 1
        }


        if(a.status === "Open" && b.status === "Open"){
            return a.deadline - b.deadline;
        }
        if(status === "Open" === true){
            return -1
        }
        if(status === "Open" === true){
            return 1
        }


        if(a.status === "Complete" && b.status === "Complete"){
            return a.deadline - b.deadline;
        }
        if(status === "Complete" === true){
            return -1
        }
        else if(status === "Complete" === true){
            return 1
        }
    }
    toString(){
        let icon;

        switch (this.status){
            case "Open":icon= "\u2731";break;
            case "In Progress": icon = "\u219D ";break;
            case "Complete": icon = "\u2714";break;
        }
        console.log(`${this.isOverdue} ${this.title}`);
        if(this.status === "Complete"){
            return `[✔] ${this.title}`
        }
        if(this.isOverdue !==false) {

            return `[${icon}] ${this.title} (deadline: ${this.deadline})`
        }
        else
        return `[⚠] ${this.title} (overdue)`
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];

setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 2000); // Sort and print one second later
