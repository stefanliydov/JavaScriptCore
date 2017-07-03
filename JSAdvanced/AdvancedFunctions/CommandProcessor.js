function solve(arr) {
        let text = "";
    for(let row of arr){
        commandReader(row)
    }

    function commandReader(row) {
        let tokens = row.split(' ');

        switch (tokens[0]){

            case "append": text+= tokens[1];
            break;
            case "removeStart": text = text.slice(Number(tokens[1]));
            break;
            case "removeEnd": text = text.slice(0 ,text.length - Number(tokens[1]));
            break;
            case "print": console.log(text);
        }
    }


}
let processor = solve();

processor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);