/**
 * Created by Stefan on 7.6.2017 г..
 */
function SecretData(arr) {
    let nameReg = /\*[A-Z][a-zA-Z]*(?=\s|$|\.)/g;
    let phoneReg = /\+[0-9\-]{10}(?=\s|$|\.)/g;
    let idReg = /![a-zA-Z0-9]+(?=\s|$|\.)/g;
    let baseReg = /_[a-zA-Z0-9]+(?=\s|$|\.)/g;

    arr.forEach(x => {
        x = x.replace(nameReg, replace);
        x = x.replace(phoneReg, replace);
        x = x.replace(idReg, replace);
        x = x.replace(baseReg, replace);
        console.log(x);
    });
    function replace(match) {

        return "|".repeat(match.length);
    }

}
SecretData([
        'Agent *Ivankov was in the room when it all happened.',
        'The person in the room was heavily armed.',
        'Agent *Ivankov had to act quick in order.',
        'He picked up his phone and called some unknown number.',
        'I think it was +555-49-796',
        'I can\'t really remember...',
        'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.'
]);