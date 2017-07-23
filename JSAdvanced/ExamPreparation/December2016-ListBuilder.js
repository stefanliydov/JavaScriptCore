/**
 * Created by Stefan on 20.7.2017 г..
 */
function listBuilder(selector) {
    let container = $(selector);

    function createNewList() {
        let container = $(selector);
        container.empty();
        container.append($('<ul>'));
    }
    function addItem(item) {
        let currItem = $('<li>')
            .text(item);

            currItem.append('<button>')
            .text("Up")
            .click(this.buttonUp);
            currItem.append('<button>')
            .text("Down")
            .click(this.buttonDown);
        container.append(currItem);
    }
    function buttonUp() {
        let li = $(this).parent();
        li.insertBefore(li.prev());
    }
    function buttonDown() {
        let li = $(this).parent();
        li.insertAfter(li.next());
    }
    return{
        createNewList,
        addItem,
        moveUp,
        moveDown
    }

}