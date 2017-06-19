function main(arr) {

    let banList = arr.pop().split(' ').filter(e => e !="").map(e => e.trim());
    let regex = /#(\b[a-zA-Z][\w\-]+[a-zA-Z0-9]\b)/g;
    let inCode = false;

    for(let i =0; i< arr.length; i++){
        if(arr[i].match(/<code>/g))
            inCode =true;



        if(inCode==false){
        let match;
            while(match = regex.exec(arr[i])) {

                if (!banList.includes(match[1])) {
                arr[i] = arr[i].replace(match[0], `<a href="/users/profile/show/${match[1]}">${match[1]}</a>`);
            }
                else {
                arr[i] = arr[i].replace(match[0], '*'.repeat(match[1].length));
            }
        }
        }
        if(arr[i].match(/<\/code>/g))
            inCode= false;
    }
    arr.forEach(e => console.log(e));
}
main(
    [
        'Far far away, behind the word mountains,',
        'far from the countries #Vokalia and Consonantia,',
        'there live the #blind texts. Separated they #live in Bookmarksgrove',
        'right at the coast of the Semantics, a large language ocean.',
        'A #small #river named #Duden flows by their place and supplies',
        'it with the necessary regelialia. It is a paradisematic country,',
        'in which roasted parts of sentences fly into your mouth.',
        'Even the all-powerful #Pointing has no control about the blind texts',
        'it is an almost unorthographic life One day however a small line of blind',
        'text by the name <code> of Lorem Ipsum #decided to </code> #',
        'leave for the far World of Grammar.',
        'The Big #Oxmox advised her',
        'not to do so, because there were thousands of bad Commas,',
        'wild Question Marks and devious Semikoli,',
        'but the Little Blind Text didn\'t listen.',
        'small river Vokalia',
    ]
)