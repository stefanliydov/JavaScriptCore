/**
 * Created by Stefan on 18.7.2017 г..
 */
class TitleBar{
    constructor(title){
        this.title= title;
        this.links = [];
    }

    addLink(href,name){
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);
        this.links.push(link);
    }
    appendTo(selector) {
        let header = $('<header>')
            .addClass('header');
        let headerRow = $('<div>')
            .addClass('header-row');
        let button = $('<a>')
            .addClass('button')
            .html('&#9776;')
            .click(() => $('div.drawer').toggle())
        let span = $("<span>").addClass('title')
            .text(this.title);
        let drawer = $('<div>')
            .addClass('drawer');
        let navMenu = $('<nav>')
            .addClass('menu');
        //Appending Elements
        this.links.forEach(link => navMenu.append(link));
        headerRow.append(button);
        headerRow.append(span);
        drawer.append(navMenu);
        header.append(headerRow);
        header.append(drawer);
        $(selector).append(header);

    }

}
