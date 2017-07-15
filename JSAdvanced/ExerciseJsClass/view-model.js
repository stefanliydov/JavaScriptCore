/**
 * Created by Stefan on 14.7.2017 г..
 */
class Textbox {

    constructor(selector, regex){
        this._elements = $(selector);
        this._value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
    }
    get elements(){
        return this._elements;
    }
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for(let el of this._elements){
            $(el).val(value);
        }
    }
    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
