function main(arr) {
    let specialKey = arr.shift()

    let regex = new RegExp(`(\\s|^)(${specialKey}\\s+)([#$%!A-Z]{8,})(\\.|,|\\s|$)`,'gi');

    for(let i =0; i<arr.length; i++){

        let match;
        while(match = regex.exec(arr[i])){
            let matchWord = match[3];
            if(matchWord.toUpperCase() !== matchWord)
                continue;
            let decodeWord = DecodeWord(matchWord);

            let decodeMatch =match[1]+match[2]+decodeWord+match[4]
           arr[i]= arr[i].replace(match[0],decodeMatch );

        }
    }
    arr.forEach(e => console.log(e));
    function DecodeWord(encodeWord) {
        let decodeWord = encodeWord.replace(/!/g, '1');
        decodeWord = decodeWord.replace(/%/g, '2');
        decodeWord = decodeWord.replace(/#/g, '3');
        decodeWord = decodeWord.replace(/\$/g, '4');
        return decodeWord.toLowerCase();
    }
}
main([ 'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ]
);