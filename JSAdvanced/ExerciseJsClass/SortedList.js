/**
 * Created by Stefan on 13.7.2017 г..
 */
class SortedList{
    constructor() {
        this.arr = [];
        this.size=0
    }
    add (element) {
    this.arr.push(element);
    this.size++;
    this.sort();
    }
    remove (i) {
        if(i>=0 && i<this.arr.length){
            this.arr.splice(i, 1);
            this.size--;
        }

    }
    toString() {
        return this.arr.join(' ');
    }
    sort () {
        this.arr = this.arr.sort((a,b) => a-b);
    }
    get(i) {
        if(i>=0 && i<this.arr.length){
            return this.arr[i];
        }
    }

}
let a = new SortedList();
console.log(a.size);
a.add(5);
console.log(a.size);
console.log(a);

