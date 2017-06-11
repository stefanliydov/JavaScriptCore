/**
 * Created by Stefan on 6.6.2017 г..
 */
function Split (str, delimer){
    "use strict";
str.split(delimer).forEach(x=> console.log(x));

}
Split(`One-Two-Three-Four-Five`,
    `-`
 );