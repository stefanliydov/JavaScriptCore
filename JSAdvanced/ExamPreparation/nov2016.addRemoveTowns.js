/**
 * Created by Stefan on 21.7.2017 г..
 */

function attachEvents() {
    // TODO: …
    $("#btnDelete").click(function () {
        $(":selected").remove()
    })
    $("#btnAdd").click(function () {
        if($("#newItem").val() !== "") {
            let list = $("#towns");
            let newLi = $("<option>").text($("#newItem").val())
            list.append(newLi);
            $("#newItem").val("")
        }
    })
}