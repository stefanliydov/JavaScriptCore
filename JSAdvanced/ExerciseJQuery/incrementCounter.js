function increment(selector) {
    // TODO
    let container  =$(selector);
    let textArea = $('<textarea>');
    let incrementBt = $('<button>Increment</button>');
    let addBt = $('<button>Add</button>');
    let list = $('<ul>');

    //TextArea Attributes added
    textArea.addClass('counter');
    textArea.val(0);
    textArea.attr('disabled', 'true');

    //Buttons Attr added
    incrementBt.addClass('btn');
    incrementBt.attr('id', 'incrementBtn');
    addBt.addClass('btn');
    addBt.attr('id', 'addBtn')

    //List add Attributes
    list.addClass('results');

    //Add events
    $(incrementBt).click(increase);
    function increase() {
        textArea.val(+textArea.val() + 1);
    }
    $(addBt).click(appendToList);
    function appendToList() {
        let li =$(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    }

    //Transfer all elements to a fragment
    let fragment = document.createDocumentFragment();
    textArea.appendTo(fragment);
    incrementBt.appendTo(fragment);
    addBt.appendTo(fragment);
    list.appendTo(fragment);
    //Transfer fragment to container(main <div>)
    container.append(fragment);
}
