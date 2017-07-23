/**
 * Created by Stefan on 22.7.2017 г..
 */
class TitleBar {
    constructor(title){
        this.title = title;
        this. links = [];
    }
    addLink(href, name){
        this.links.push($('<a>')
            .addClass('menu-link')
            .attr("href", href)
            .text(name));
    }
    appendTo(selector){
        let container = $(selector);
        let header = $("<header>").addClass("header")
            let div = append(("<div>")
                .addClass("header-row"))
            .append(("<a>")
                .addClass("button")
                .html('&#9776;')
                .click(() => $('div.drawer').toggle()))
            .append(("<span>")
                .addClass("title")
                .text(this.title))




    }
}