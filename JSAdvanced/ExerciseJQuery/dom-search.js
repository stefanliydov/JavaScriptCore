function domSearch() {

    let addControlDiv =$('<div>');
    addControlDiv.addClass('add-controls')
        .append($(`<label>`).text(`Enter text: `).append($("<input>")))
        .append($('<a>')
            .addClass("button")
            .css('display', 'inline-block')
            .text('Add')
            .click(function () {
                let elementText = $('label input');
                let newElement = $('<li>')
                    .
            })
        )



}
