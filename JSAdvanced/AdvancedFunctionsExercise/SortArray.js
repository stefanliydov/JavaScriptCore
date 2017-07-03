function sortArray(arr, sort){
    "use strict";

    let ascendingComp = function (a,b) {
        return a-b;
    }
    let descending = function (a,b) {
        return b-a;
    }

    let sortingStrats = {
        asc: ascendingComp,
        desc: descending
    }

    return arr.sort(sortingStrats[sort]);
}