function createBook(selector, bookTitle, authorName, isbn) {
    let bookGenerator = (function () {
        let id =1;
        return function (selector, bookTitle, authorName, isbn) {
            let container = $(selector);

            let newBook = $('<div>');
            newBook.attr("id", `book${id}`);
            newBook.css("border", "none");
            $(`<p class="title">${bookTitle}</p>`).appendTo(newBook);
            $(`<p class="author">${authorName}</p>`).appendTo(newBook);
            $(`<p class="isbn">${isbn}</p>`).appendTo(newBook);
            let selectBtn = $(`<button>Select</button>`);
            let deselectBtn = $(`<button>Deselect</button>`);

            selectBtn.on("click", () => newBook.css("border", "2px solid blue"));
            deselectBtn.on("click", () => newBook.css("border", "none"))
            selectBtn.appendTo(newBook);
            deselectBtn.appendTo(newBook);
            newBook.appendTo(container);
        id++;
        };
    }())
    bookGenerator(selector, bookTitle, authorName, isbn);
}
