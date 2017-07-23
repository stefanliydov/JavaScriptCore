/**
 * Created by Stefan on 19.7.2017 г..
 */
let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();

let f = list;
f.add(6);
f.add(6);

console.log(f.toString());
f = list;
f
console.log(f.toString());
module.exports = list;
