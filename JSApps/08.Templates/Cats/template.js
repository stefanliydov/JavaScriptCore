$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let allCats = $("#allCats");
        allCats.empty();

        let source = $("#cat-template").html();
        let template = Handlebars.compile(source);
        allCats.html(template({cats:window.cats}));
    }

    for(let cat of window.cats){
        let btn = $(`#${cat.id}`).prev();
        btn.click(() =>
        {
            $(`#${cat.id}`).toggle()
        })

    }

});

