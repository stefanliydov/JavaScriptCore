function cardDeckBuilder(selector) {
    let container = $(selector);

    function addCard(face, suit) {
        let card = $("<div>")
            .addClass("card")
            .text(`${face} ${getSuitSymbol(suit)}`)
            .click(reverseCards);
        card.appendTo(container)

        function reverseCards() {
            container.children().each(function(i,li){container.prepend(li)})        }

        function getSuitSymbol(suit) {
            switch (suit){
                case "C": return `\u2663`;
                case "D": return `\u2666 `;
                case "H": return `\u2665 `;
                case "S": return `\u2660 `;
            }
        }
    }
    return{addCard}
}