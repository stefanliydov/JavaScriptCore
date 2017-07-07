function getSortedList() {
    return{
        arr: [],
        size:0,
        add: function (element) {
            this.arr.push(element);
            this.size++;
            this.sort();
        },
        remove: function (i) {
        if(i>=0 && i<this.arr.length){
           this.arr.splice(i, 1);
            this.size--;
        }

        },
        toString: function () {
            return this.arr.join(' ');
        },
        sort:function () {
            this.arr = this.arr.sort((a,b) => a-b);
        },
        get: function (i) {
            if(i>=0 && i<this.arr.length){
                return this.arr[i];
            }
        }

}


}
let sortedList = getSortedList();

sortedList.add(2);
sortedList.add(4)
sortedList.add(7)
sortedList.add(1)
sortedList.add(-9)
console.log(sortedList.toString());

console.log(sortedList.size);

sortedList.remove(2);
console.log(sortedList.toString());
console.log(sortedList.get(2))

