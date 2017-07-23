/**
 * Created by Stefan on 20.7.2017 г..
 */
function makeList() {
    let data = [];
    return {
        addLeft: function(item)
        {
            data.unshift(item);
        },
        addRight: function(item)
        {
            data.push(item);
        },
        clear: function()
        {
            data = [];
        },
        toString: function()
        {
            return data.join(", ");
        }
    };
}
let f = makeList();
console.log(typeof f);

module.exports = makeList