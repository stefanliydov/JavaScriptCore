/**
 * Created by Stefan on 26.5.2017 г..
 */
function Point(input) {
    let[x,y,xMin,xMax,yMin,yMax] = input;
    if(x >=xMin&& x<=xMax&&y>=yMin && y<=yMax)console.log('inside');
    else console.log('outside');
}
Point([8,-1,2, 12, -3,3]);
