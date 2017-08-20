/**
 * Created by Stefan on 20.8.2017 г..
 */
function startApp() {
    showView("Welcome");

    //ATTACH EVENT HANDLERS
    $("body").find("a[data-target]").click(navigateTo);
    $("#btnRegister").click(registerUser);
    $("#btnLogin").click(loginUser);
    $("#catalog").click(getCatalog);
    $("#btnSubmitPost").click(sumbitPost);
    $("#posts").click(getMyPosts);
    $("#btnPostComment").click(createComment);
    $("header").find("div").find("a").click(logout);




    //NAVIGATES TO SECTION
    function navigateTo() {
        let target = $(this).attr("data-target");
        showView(target);
    }

    //SHOWS AND HIDES SECTIONS
    function showView(target) {
        $("body").find("section").hide();

        $("#view"+target).show();
    }
    //CHECKS WHETHER USER IS LOGGED IN/OUT
    if(sessionStorage.getItem("authtoken") === null){
        isLoggedOut();
    } else {
        isLoggedIn();
    }

    //WHETHER USER IS LOGGED IN/OUT HIDE/SHOW STUFF
    function isLoggedIn() {
        $("#menu").show();
        showView("Catalog");
        getCatalog();
        $("#profile").show();
        $("#profile").find("span").text(sessionStorage.getItem("username"));
    }
    function isLoggedOut() {
        $("#menu").hide();
        $("#profile").hide();
    }
    
    //REGISTER USER
    function registerUser(ev) {
        ev.preventDefault();
       let registerFormInputs = $("#registerForm").find("input");
       let username = registerFormInputs[0];
       let password = registerFormInputs[1];
       let repeatPassword = registerFormInputs[2];

       let usernameVal = $(username).val();
       let passwordVal = $(password).val();
       let repeatPasswordVal = $(repeatPassword).val();

        let usernameRegex = new RegExp(/^[a-zA-Z]{3,}$/g);
       let passwordRegex = new RegExp(/^[a-zA-Z0-9]{6,}$/g);
       if(!usernameRegex.test(usernameVal)){

           auth.showError("Username should be at least 3 characters long and should contain only english alphabet letters")
       }
       else if(!passwordRegex.test(passwordVal)){
           auth.showError("Password should be at least 6 characters long and contain english letters and numbers ")
       }
       else if(passwordVal !==repeatPasswordVal){
            auth.showError("Passwords don't match!")
       }
       else {
           auth.register(usernameVal,passwordVal,repeatPasswordVal)
               .then((userInfo)=>{
                    saveSession(userInfo);
                   $(username).val("");
                   $(password).val("");
                   $(repeatPassword).val("");
                   auth.showInfo("User registration successful.");
                   isLoggedIn();
               })
               .catch(auth.handleError);
       }
    }


    //LOGIN USER
    function loginUser(ev) {
        ev.preventDefault();
        let formInputs =$("#loginForm").find("input");

        let username = $(formInputs[0]);
        let password = $(formInputs[1]);

        let usernameVal =username.val();
        let passwordVal =password.val();


        let usernameRegex = new RegExp(/^[a-zA-Z]{3,}$/g);
        let passwordRegex = new RegExp(/^[a-zA-Z0-9]{6,}$/g);
        if(!usernameRegex.test(usernameVal)){

            auth.showError("Username should be at least 3 characters long and should contain only english alphabet letters")
        }
        else if(!passwordRegex.test(passwordVal)){
            auth.showError("Password should be at least 6 characters long and contain english letters and numbers ")
        }
        else {
            auth.login(usernameVal, passwordVal)
                .then((userInfo) => {
                    saveSession(userInfo);
                    isLoggedIn();
                    auth.showInfo(`Login successful.`);
                    username.val("");
                    password.val("");
                })
                .catch(auth.handleError);
        }
    }

    //GET CATALOG
    function getCatalog() {

        requester.get("appdata",`posts?query={}&sort={"_kmd.ect": -1}`,"kinvey")
            .then((catInfo)=>{
            "use strict";
                showCatalog(catInfo);
            }).catch(auth.handleError);
    }

    //SHOW CATALOG
    function showCatalog(catalogInfo) {

        let container = $("#viewCatalog");
        container.empty();
        let div = $("<div>").addClass("posts");
        let index = 1;
        if(catalogInfo.length ===0){
            div.append($("<article>").text("No posts in database").addClass("post"));

        }
        for(let art of catalogInfo){

            let id =art._id;
            let time = calcTime(art._kmd.ect);
            let article = $(`<article data-id="${id}">`).addClass("post");
            article.append($("<div>").addClass("col rank")
                .append($(`<span>${index}</span>`)));

            article.append($("<div>").addClass("col thumbnail")
                .append($(`<a>`).attr("href",`${art.url}`)
                    .append($(`<img src='${art.imageUrl}'></a>`))));

            article.append($("<div>").addClass("post-content")
                .append($("<div>").addClass("title")
                    .append($("<a>").attr("href",`${art.url}`).text(`${art.title}`)))
                .append($("<div>").addClass("details")
                    .append($("<div>").addClass("info").text(`submitted ${time} by ${art.author}`))
                    .append($("<div>").addClass("controls")
                        .append($("<ul>")
                            .append($(`<li class="action"><a class="commentsLink" href="#">comments</a></li>`)
                                .click(()=>viewComments(id)))
                            .append($(`<li class="action"><a class="editLink" href="#">edit</a></li>`)
                                .click(()=>{editPost(id,art.url,art.title,art.imageUrl,art.description, art.author)}))
                            .append($(`<li class="action"><a class="deleteLink" href="#">delete</a></li>`)
                                .click(()=>{deletePost(id)}))))));
            article.appendTo(div);

            if(art.author !== sessionStorage.getItem("username")){
                $(article.find("a")[3]).hide();
                $(article.find("a")[4]).hide();
            }
            index++;
        }
        div.appendTo(container);
    }

    //CALCULATES TIME PASSED
    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    //SUBMIT POST
    function sumbitPost(ev) {
        ev.preventDefault();
        let getFormInputs = $("#submitForm").find("input");
        let postAuthor = sessionStorage.getItem("username");
        let url = $(getFormInputs[0]);
        let title= $(getFormInputs[1]);
        let imageUrl = $(getFormInputs[2]);
        let description =$("#submitForm").find("textarea");

        let urlVal = url.val();
        let titleVal = title.val();
        let imageUrlVal = imageUrl.val();
        let descriptionVal = description.val();

        let regex = new RegExp(/^http.+/g);
        if(urlVal.length === 0){
            auth.showInfo("Link URL cannot be left empty.");
        }
        else if(titleVal.length === 0){
            auth.showInfo("Link Title cannot be left empty.");
        }
        else if(imageUrlVal.length > 0 && !imageUrlVal.match(regex)) {

                auth.showInfo("Invalid Thumbnail Image link.")

        }
        else{

            let data = {
                "author": postAuthor,
                "title":titleVal,
                "url": urlVal,
                "imageUrl":imageUrlVal,
                "description":descriptionVal

            };
            requester.post("appdata","posts","kinvey",data)
                .then(()=>{
                auth.showInfo("Post created.");
                    showView("Catalog");
                    getCatalog();
                    url.val("");
                    title.val("");
                    imageUrl.val("");
                    description.val("");
                }).catch(auth.handleError);
        }

    }

    function editPost(id,currUrl,currTitle,currImageUrl,currDes,author) {
    showView("Edit");
    let editFormInput = $("#editPostForm").find("input");

        let url = $(editFormInput[0]);
        let title = $(editFormInput[1]);
        let imageUrl = $(editFormInput[2]);
        let description = $("#editPostForm").find("textarea");
        url.val(currUrl);
        title.val(currTitle);
        imageUrl.val(currImageUrl);
        description.val(currDes);


        $("#btnEditPost").click(pressEdit);
       function pressEdit(ev) {
          let urlVal = url.val();
          let titleVal = title.val();
          let imageUrlVal = imageUrl.val();
          let descriptionVal = description.val();

           ev.preventDefault();
           let regex = new RegExp(/^http.+/g);

           if(urlVal.length === 0){
               auth.showInfo("Link URL cannot be left empty.");
           }
           else if(titleVal.length === 0){
               auth.showInfo("Link Title cannot be left empty.");
           }
           else if(imageUrlVal.length > 0 && !imageUrlVal.match(regex)) {

               auth.showInfo("Invalid Thumbnail Image link.")

           }
           else{

               let data = {
                   "author": author,
                   "title":titleVal,
                   "url": urlVal,
                   "imageUrl":imageUrlVal,
                   "description":descriptionVal

               };
               requester.update("appdata",`posts/${id}`,"kinvey",data)
                   .then(()=>{
                       auth.showInfo(`Post ${titleVal} updated`);
                       showView("Catalog");
                       getCatalog();
                       url.val("");
                       title.val("");
                       imageUrl.val("");
                       description.val("");
                   }).catch(auth.handleError);
           }
       }

    }

    function deletePost(id) {
        requester.remove("appdata", `posts/${id}`, "kinvey")
            .then(()=>{
            auth.showInfo("Post deleted.");
                showView("Catalog");
                getCatalog();
            }).catch(auth.handleError);
    }

    //MY POSTS
    function getMyPosts() {
        requester.get("appdata",
            `posts?query={"author":"${sessionStorage.getItem("username")}"}&sort={"_kmd.ect": -1}`,
        "kinvey")
            .then((userPosts)=>{
                showMyPosts(userPosts);
            }).catch(auth.handleError);
    }

    //SHOW MY POSTS
    function showMyPosts(userPosts) {

        let container = $("#viewMyPosts");
        container.empty();
        let div = $("<div>").addClass("posts");
        let index = 1;
        if(userPosts.length ===0){
            div.append($("<article>").text("No posts in database").addClass("post"));
        }
        for(let art of userPosts){

            let id =art._id;
            let time = calcTime(art._kmd.ect);
            let article = $(`<article data-id="${id}">`).addClass("post");
            article.append($("<div>").addClass("col rank")
                .append($(`<span>${index}</span>`)));

            article.append($("<div>").addClass("col thumbnail")
                .append($(`<a>`).attr("href",`${art.url}`)
                    .append($(`<img src='${art.imageUrl}'></a>`))));

            article.append($("<div>").addClass("post-content")
                .append($("<div>").addClass("title")
                    .append($("<a>").attr("href",`${art.url}`).text(`${art.title}`)))
                .append($("<div>").addClass("details")
                    .append($("<div>").addClass("info").text(`submitted ${time} by ${art.author}`))
                    .append($("<div>").addClass("controls")
                        .append($("<ul>")
                            .append($(`<li class="action"><a class="commentsLink" href="#">comments</a></li>`)
                                .click(()=>viewComments(id)))
                            .append($(`<li class="action"><a class="editLink" href="#">edit</a></li>`).click(()=>{editPost(id,art.url,art.title,art.imageUrl,art.description, art.author)}))
                            .append($(`<li class="action"><a class="deleteLink" href="#">delete</a></li>`).click(()=>{deletePost(id)}))))));
            article.appendTo(div);
            index++;
        }
        div.appendTo(container);

    }

    //VIEW COMMENTS
    function viewComments(id) {
        $("#viewComments").show();
       // $("#viewComments .col thumbnail").empty();
        let post = $($("#viewComments .post")[0]);
        let currArt;
        post.empty();
        for(let article of $("#viewCatalog").find("article[data-id]")){
            if($(article).attr("data-id")!== id)
                $(article).hide();
            else{
                currArt= $(article);

            }
        }

        post.html(currArt);
        let comments =$(post.find("a")[2]);
        comments.hide();

        requester.get("appdata", `comments?query={"postId":"${id}"}&sort={"_kmd.ect": -1}`)
            .then((comments)=>{

                showComments(comments,id);
            }).catch(auth.handleError);
    }

    function showComments(comments, id) {
        let articles =$("#viewComments ").find("article");
        for(let i =1; i<articles.length; i++){
            $(articles[i]).remove()
        }
        for(let comment of comments){
            let id = comment._id;
            let time = calcTime(comment._kmd.ect);
        let art = $(`<article>`).addClass("post post-content");
        art.append($("<p>").text(comment.content));

        if(comment.author === sessionStorage.getItem("username")){
            art.append($(`<div> submitted ${time} by ${comment.author} | <a href="#" class="deleteLink">delete</a>`).click(()=>{deleteComment(id)}))
        }

        else{
            art.append($(`<div> submitted ${time} by ${comment.author}</a>`))
        }

         art.appendTo($("#viewComments "));


        }

    }
    function createComment(ev) {
        let id =$("#viewComments").find("article").attr("data-id");
        ev.preventDefault();


        let commentArea =$("#commentForm").find("textarea");

        let data = {
            postId: id,
            content: commentArea.val(),
            author: sessionStorage.getItem("username")
        };
        console.log(data);
       requester.post("appdata","comments","kinvet",data)
           .then((info)=>{
           "use strict";
           commentArea.val("");
               auth.showInfo("Comment uploaded.Reload to see it!");
           }).catch(auth.handleError);
    }
    
    function deleteComment(id) {
        requester.remove("appdata",`comments/${id}`,"kinvey")
            .then(()=>{
                auth.showInfo("Comment deleted. Please reload page.");

            }).catch(auth.handleError);
    }
    //LOGOUT
    function logout() {
        auth.logout()
            .then(()=>{
            auth.showInfo("Logout successful.");
            showView("Welcome");
            isLoggedOut();
            sessionStorage.clear();
            }).catch(auth.handleError);
    }

    function loading() {
        $("#loadingBox").toggle();
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('teamId', userInfo.teamId);
    }
}