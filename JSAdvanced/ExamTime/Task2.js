/**
 * Created by Stefan on 23.7.2017 г..
 */
class Task {

    constructor(title, deadline){
        this.title = title;
        this._status = "Open";
        this.deadline = deadline;
        this.isOverdue = "false";
    }
}