/**
 * Created by Stefan on 3.7.2017 г..
 */
function solve(arr) {
    let processor = (function () {
        let list = [];

         function add(string) {
        list.push(string);
    }
        function remove(string) {
        list = list.filter(e => e !== string);
    }
        function print() {
            console.log(list.join(','));
        }
        return{
            add,
            remove,
            print
        }
})();
    for(let el of arr){
    let tokens = el.split(' ');

        processor[tokens[0]](tokens[1]);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);