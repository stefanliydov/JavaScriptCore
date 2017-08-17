/**
 * Created by Stefan on 28.7.2017 г..
 */
function attachEvents(){
    $("#submit").click(() =>{
        "use strict";
        let message = {
            "author": $("#author").val(),
            "content": $("#content").val(),
            "timestamp": Date.now()
        }

       let newReq = {
           url: "https://messenger-3a354.firebaseio.com/messenger/.json",
           method: "POST",
           data: JSON.stringify(message),
           success: () => $.ajax(req)
       }
        $.ajax(newReq)
    });
    let req = {
        url: "https://messenger-3a354.firebaseio.com/.json",
        method: "GET",
        success: updateBoard
    };
$.ajax(req);
    $("#refresh").click(() =>{$.ajax(req);})
    function updateBoard(data) {


        let container =$("#messages");
        container.empty();
        let result = "";
        for(let message in data.messenger){
            result+=`${data.messenger[message].author}: ${data.messenger[message].content}\n`
        }
        container.text(result);
    }
}
