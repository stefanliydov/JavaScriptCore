
function Deck(arr) {
    let deck =[];
    function makeCard(face, suit) {
        const validFace = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const validSuit = ['S','H','D','C'];

        if(!validFace.includes(face))
            throw new Error("Invalid face");
        if(!validSuit.includes(suit))
            throw new Error("Invalid suit");

        let card = {
            face: face,
            suit: suit,
            toString: ()=> {
                "use strict";
                let suitCard = {
                    'S': "\u2660",
                    'H': "\u2665",
                    'D': "\u2666",
                    'C': "\u2663"
                };
                return `${card.face}${suitCard[card.suit]}`;
            }
        };
        return card;
    }
    for(let card of arr){

        var face = card. substr(0, card.length-1);
        var suit  = card[card.length-1];
        try {
            deck.push(makeCard(face, suit));
        }
        catch (err){

            return console.log(`Invalid card: ${card}`);
        }
    }
return deck.join(' ');

}
console.log(Deck(['AS', '10D', 'KH', '2C',]));;