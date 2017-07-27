/**
 * Created by Stefan on 23.7.2017 г..
 */
class Contact {

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if(this.online === true){
            let el = $(`.title:contains(${this.firstName})`);

            $(el).addClass("title online")
        }
        else{
            let el = $(`.title:contains(${this.firstName})`);
            $(el).removeClass();
            $(el).addClass("title")
        }
    }

    render(id) {


        let cont = $("#"+id);
        let article = $("<article>");
        let title = $("<div>")
            .addClass("title")
            .text(`${this.firstName} ${this.lastName}`)
            .append($("<button>").html("&#8505;").click(() => info.toggle()));
        let info = $("<div>")
            .addClass("info")
            .css("display", "none");
        info.append($(`<span>&phone; ${this.phone}</span>`));
        info.append($(`<span>&#9993; ${this.email}</span>`));

        article.append(title);
        article.append(info);
       cont.append(article);
    }
}


