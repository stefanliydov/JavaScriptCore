function attachEvents() {
    $(".add").click(addBtn);
$(".load").click(loadCatches);
    $(".update").click(updateF);
    $(".delete").click(deleteF);
    function addBtn() {
        let angler = $("#aside .angler");
        let weight = $("#aside .weight");
        let species = $("#aside .species")
        let location  = $("#aside .location");
        let bait = $("#aside .bait");
        let captureTime = $("#aside .captureTime");
        console.log(angler.val());
        let newCatch = {
            "angler": angler.val(),
            "weight": weight.val(),
            "species": species.val(),
            "location": location.val(),
            "bait": bait.val(),
            "captureTime": captureTime.val(),
        };


        let addReq = {
            url: `https://baas.kinvey.com/appdata/kid_rk_GaVALZ/biggestCatches`,
            headers:
                {
                    "Authorization": "Basic "+btoa("stefan:s")
                },
            method: "POST",
            data: newCatch,

        };
        $.ajax(addReq);
        angler.val("");
        weight.val("");
        species.val("");
        location.val("");
        bait.val("");
        captureTime.val("");
    }
    function loadCatches() {
        let catches = $("#catches");
        let getReq = {
            url: `https://baas.kinvey.com/appdata/kid_rk_GaVALZ/biggestCatches`,
            method: "GET",
            headers:
                {
                    "Authorization":"Basic "+ btoa("stefan:s")

                },
            success: appendCatches
        };
        $.ajax(getReq);

        function appendCatches(data) {
          catches.empty();
           for(let catchData of data){

               let catchElement = $('<div>')
                   .addClass('catch')
                   .attr('data-id', catchData._id)
                   .append($('<label>').text('Angler'))
                   .append($('<input>')
                       .attr('type', 'text')
                       .addClass('angler')
                       .val(catchData.angler))
                   .append($('<label>').text('Weight'))
                   .append($('<input>')
                       .attr('type', 'number')
                       .addClass('weight')
                       .val(catchData.weight))
                   .append($('<label>').text('Species'))
                   .append($('<input>')
                       .attr('type', 'text')
                       .addClass('species')
                       .val(catchData.species))
                   .append($('<label>').text('Location'))
                   .append($('<input>')
                       .attr('type', 'text')
                       .addClass('location')
                       .val(catchData.location))
                   .append($('<label>').text('Bait'))
                   .append($('<input>')
                       .attr('type', 'text')
                       .addClass('bait')
                       .val(catchData.bait))
                   .append($('<label>').text('Capture Time'))
                   .append($('<input>')
                       .attr('type', 'number')
                       .addClass('captureTime')
                       .val(catchData.captureTime));
               catchElement
                   .append($('<button>')
                       .addClass('update').text('Update').on('click', updateF))
                   .append($('<button>')
                       .addClass('delete').text('Delete').on('click', deleteF));
               catches.append(catchElement)
           }


        }
    }
    function updateF() {

        let updateCatch = {
            "angler":$(this).parent().find(".angler").val(),
            "weight": $(this).parent().find(".weight").val(),
            "species":$(this).parent().find(".species").val(),
            "location": $(this).parent().find(".location").val(),
            "bait": $(this).parent().find(".bait").val(),
            "captureTime":$(this).parent().find(".captureTime").val()
        };
        let updateReq = {
            url: `https://baas.kinvey.com/appdata/kid_rk_GaVALZ/biggestCatches/${$(this).parent().attr("data-id")}`,
            headers:
                {
                    "Authorization": "Basic "+btoa("stefan:s")
                },
            method: "PUT",
            data: updateCatch,
            contentType: 'application/json'
        };
        $.ajax(updateReq);
    }
    function deleteF() {
        let deleteReq = {
            url: `https://baas.kinvey.com/appdata/kid_rk_GaVALZ/biggestCatches/${$(this).parent().attr("data-id")}`,
            headers:
                {
                    "Authorization": "Basic "+btoa("stefan:s")
                },
            method: "DELETE",

        };
        $.ajax(deleteReq);

        $(this).parent().remove();

    }
}/**
 * Created by Stefan on 1.8.2017 г..
 */
