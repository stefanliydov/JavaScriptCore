function attachEvents() {
$("#btnLoad").click(load);


    function load(){

        let req = {
            url: `https://phonebook-nakov.firebaseio.com/phonebook.json`,
            method: "GET",
            success: getNumbers,
            error: onError
        };
        $.ajax(req);
    }
    function getNumbers(data) {
        let phonebook = $("#phonebook");
        phonebook.empty();
        for(let person in data){
            (($("<li>")
                .text(`${data[person].person}: ${data[person].phone} `))
                .append($("<button>").text("[Delete]").click(deleteContact.bind(this, person))))
                .appendTo(phonebook);
        }
    }
    function deleteContact(person) {
        let deleteReq = {
            url:`https://phonebook-nakov.firebaseio.com/phonebook/${person}.json`,
            method:"DELETE",
            success:load,
            error: onError
        };
        $.ajax(deleteReq);
    }
    $("#btnCreate").click(createContact);

    function createContact() {
     let person = $("#person");
     let phone = $("#phone");
        let newContact = {
            "person": person.val(),
            "phone": phone.val()
        };
     let putReq = {
         url: `https://phonebook-nakov.firebaseio.com/phonebook.json`,
         method: "POST",
         data: JSON.stringify(newContact),
         success: load,
         error: onError
     };
     person.val("");
     phone.val("");
        $.ajax(putReq);
    }
function onError(err) {
    $("#phonebook").append($("<li>").text("ERROR"));
}
}
