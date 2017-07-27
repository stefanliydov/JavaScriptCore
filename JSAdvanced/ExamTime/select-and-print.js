/**
 * Created by Stefan on 23.7.2017 г..
 */
function move(command) {
    let selected = $(":selected");
    switch (command){
        case "right":
        $('#available-towns :selected').remove();
        $("#selected-towns").append(selected);
            $("#selected-towns option:selected").prop("selected", false);
        break;
        case "left":
            $("#selected-towns :selected").remove();
            $("#available-towns").append(selected);
            $("#myid option:selected").prop("selected", false)
            $("#available-towns option:selected").prop("selected", false);
            break;
        case "print":
            let children = $("#selected-towns option");
            let result = [];
            for(let child of children){
                result.push(child.text);
            }
            $("#output").text(result.join("; "));
    }
}