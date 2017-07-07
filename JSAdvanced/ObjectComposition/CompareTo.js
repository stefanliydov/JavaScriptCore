function solve(arr) {
        let rectArr = [];
        for(let el of arr){
            rectArr.push(createRect(el[0], el[1]));
        }
       //    console.log(rectArr)
        return rectArr.sort((a,b) => a.compareTo(b));

    function createRect(w,h) {
        let currRect = {
            width:w,
            height:h,
            area: () => currRect.width*currRect.height,
            compareTo: function (other) {
                let result = other.area() - currRect.area();
                return result || (other.width - currRect.width);
            }
        }

        return currRect;
    }
}
console.log(solve([[10,5],[5,12]]));;