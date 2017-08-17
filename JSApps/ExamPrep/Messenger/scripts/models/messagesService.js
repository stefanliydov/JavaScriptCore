/**
 * Created by Stefan on 15.8.2017 г..
 */
let messagesService = (()=>{
    function loadMessages(username) {
        let endpoint = `messages?query={"recipient_username":"${username}"}`;
        return requester.get('appdata',endpoint,"kinvey")
    }
    
    function loadArchiveMessages(username) {
        let endpoint = `messages?query={"sender_username":"${username}"}`;
        return requester.get('appdata',endpoint, "kinvey");
    }



    return{
        loadMessages,
        loadArchiveMessages

    }
})()