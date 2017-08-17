/**
 * Created by Stefan on 15.8.2017 г..
 */
function startApp() {

    showView("AppHome");

    // Attach event handlers
    (()=>{
        $("header").find("a[data-target]").click(navigateTo);
        $("#formRegister").submit(registerUser);
        $("#formLogin").submit(loginUser);
        $("#formSendMessage").submit(sendMessage);
        $("#linkMenuLogout").click(logoutUser);
        $("#linkUserHomeMyMessages").click(()=>{
            showView("MyMessages");
            loadMyMessages()
        });
        $("#linkUserHomeSendMessage").click(()=>{
            showView("SendMessage");
            sendMessageLoadUsers()
        });
        $("#linkUserHomeArchiveSent").click(()=>{
            showView("ArchiveSent");
            loadSentMessages()
        });
        $("#linkMenuMyMessages").click(loadMyMessages);
        $("#linkMenuArchiveSent").click(loadSentMessages);
        $("#linkMenuSendMessage").click(sendMessageLoadUsers);

    })();

    if(sessionStorage.getItem("authtoken")===null){
        userLogout();
    } else {
        userLogin();
    }

    //SENT MESSAGES SCRIPT
    function loadSentMessages() {
        let username = sessionStorage.getItem("username");
        messagesService.loadArchiveMessages(username)
            .then((messages)=>{
                showLoadSentMessages(messages)
            }).catch(handleError);
    }

    function showLoadSentMessages(messages) {
        let container = $("#sentMessages");
        container.empty();
        let messageTable = $("<table>")
            .append($("<thead>")
                .append($("<tr>")
                    .append($("<th>To</th>"))
                    .append($("<th>Message</th>"))
                    .append($("<th>Date Sent</th>"))
                    .append($("<th>Actions</th>"))));

        let tbody = $($("<tbody>"));
        for(let message of messages){
            let tableRow = $("<tr>");
            let reciever = message.recipient_username;
            let text = message.text;
            let date = formatDate(message._kmd.lmt);
            let deleteBtn = $("<button>Delete</button>");
            tableRow
                .append($(`<td>`).text(reciever))
                .append($(`<td>`).text(text))
                .append($(`<td>`).text(date))
                .append($(`<td>`)
                    .append($(deleteBtn).click(()=>{deleteMessage(message._id)})));
            tbody.append(tableRow);
        }
        messageTable.append(tbody);
        container.append(messageTable)
        function deleteMessage(id) {


            requester.remove("appdata",`messages/${id}`)
                .then(()=>{
                showInfo("Message deleted.");
                    loadSentMessages()
                }).catch(handleError);
        }
    }

    function navigateTo() {
        let dataTarget = $(this).attr("data-target");
        showView(dataTarget)
    }
    // Shows selected section
    function showView(viewName) {
        $("main >section").hide();
        $("#view" + viewName).show();
    }

    // Register user
    function registerUser(event) {
        event.preventDefault();
        let registerUsername  = $("#registerUsername");
        let registerName = $("#registerName");
        let registerPassword = $("#registerPasswd");

        let usernameVal = registerUsername.val();
        let nameVal = registerName.val();
        let passVal = registerPassword.val();

        auth.register(usernameVal,passVal,nameVal)
            .then((userInfo)=>{
            registerPassword.val("");
            registerName.val("");
            registerUsername.val("");
            saveSession(userInfo);
            showInfo("User registration successful.");
            }).catch(handleError);

    }

    //Login user
    function loginUser(event) {
        event.preventDefault();
        let inputUsername = $("#loginUsername");
        let inputPassword = $("#loginPasswd");

        let usernameVal = inputUsername.val();
        let passwordVal = inputPassword.val();

        auth.login(usernameVal,passwordVal)
            .then((userInfo)=>{
            inputUsername.val("");
            inputPassword.val("");
            saveSession(userInfo);
            showInfo("Login successful.");
            })
            .catch(handleError);
    }

    //Logout user
    function logoutUser() {
        auth.logout()
            .then(()=>{
            "use strict";
            sessionStorage.clear();
            showInfo("Logout successful.");
            userLogout()
            }).catch(handleError)
    }

    function userLogout() {
        $(".anonymous").show();
        $(".useronly").hide();
        $("#spanMenuLoggedInUser").text(``);
        showView("AppHome");
    }

    function userLogin() {
        $(".anonymous").hide();
        $(".useronly").show();
        let username = sessionStorage.getItem("username");
        $("#spanMenuLoggedInUser").text(`Welcome, ${username}!`);
        $("#viewUserHomeHeading").text(`Welcome, ${username}!`)
        showView("UserHome");

    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem("authtoken", userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem("userId",userId);
        let username = userInfo.username;
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("name", userInfo.name);
        userLogin();
    }
    
    //Load My Messages
    function loadMyMessages() {

        let username = sessionStorage.getItem("username");
        messagesService.loadMessages(username)
            .then((messages)=>{
                showMyMessages(messages)
            }).catch(handleError)
    }


    function showMyMessages(messages) {

        let container = $("#myMessages");
        container.empty();
        let messageTable = $("<table>")
            .append($("<thead>")
                .append($("<tr>")
                    .append($("<th>From</th>"))
                    .append($("<th>Message</th>"))
                    .append($("<th>Date Received</th>"))));

        let tbody = $($("<tbody>"));
        for(let message of messages){
            let tableRow = $("<tr>");
            let sender = formatSender(message["sender_name"],message["sender_username"]);
            let text =message.text;
            let date = formatDate(message._kmd.lmt);
            tableRow
                .append($(`<td>`).text(sender))
                .append($(`<td>`).text(text))
                .append($(`<td>`).text(date));
            tbody.append(tableRow);
        }
        messageTable.append(tbody);
        container.append(messageTable)

    }

    function sendMessage(event) {
        event.preventDefault();
        let message = $("#msgText");
        let data = {
            "sender_username":`${sessionStorage.getItem("username")}`,
            "sender_name":`${sessionStorage.getItem("name")}`,
            "recipient_username":`${$("#msgRecipientUsername").val()}`,
            "text":`${message.val()}`
        };

        requester.post("appdata", "messages", "kinvey",data)
            .then(()=>{
            "use strict";
            showInfo("Message sent.");
                loadSentMessages();
                showView("ArchiveSent");
            }).catch(handleError);


        message.val("")
    }

    function sendMessageLoadUsers() {
        requester.get("user","","kinvey")
            .then((users)=>{
            "use strict";
            showAllUsers(users)
            })
    }

    function showAllUsers(users) {
        let container = $("#msgRecipientUsername");
        container.empty();
        for(let user of users){
            if(user.username !== sessionStorage.getItem("username")){
                let username = formatSender(user.name, user.username);
                container
                    .append($(`<option value="${user.username}">${username}</option>`));
            }
        }
    }

    function handleError(reason) {
        console.log(reason.responseJSON.description);
        showError(reason.responseJSON.description);
    }
    
    function showInfo(message) {
        let infoBox = $("#infoBox");
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(),3000);
    }
    
    function showError(message) {
        let errorBox = $("#errorBox");
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(),3000);
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }
    
}