/**
 * Created by Stefan on 13.7.2017 г..
 */
(function () {
    let id = 0;


return class Extensible{
    constructor(){
        this.id= id++;
    }
    extend(source) {
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                if (typeof source[prop] == 'function') {
                    Extensible.prototype[prop] = source[prop]
                } else {
                    this[prop] = source[prop];
                }
            }
        }
    };
}
})();