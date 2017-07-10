let module = (()=> {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'

    };

    class Card {

        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!Card.ValidFaces.includes(value)) {
                throw new Error("Invalid face");
            }
            this._face = value;
        }

        get suit() {

            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
                throw new Error("Invalid suit")
            }
            this._suit = value;
        }

        toString() {
            return this._face + this._suit;
        }

        static get ValidFaces() {
            return Card._ValidFaces;
        }
    }
    Card._ValidFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
})();
let c1= new Card('2', Suits.SPADES);
console.log(c1+'');