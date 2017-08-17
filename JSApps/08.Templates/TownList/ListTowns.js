/**
 * Created by Stefan on 9.8.2017 г..
 */
function attachEvents() {
    $("#btnLoadTowns").click(print);

    function print() {
        let towns = $("#towns").val().split(", ");
        let source = $("#towns-template").html();

        let template = Handlebars.compile(source);
        let root = $("#root");
        for(let town of towns){
            let obj = {town:town};

            root.append(template(obj));
        }
    }
}