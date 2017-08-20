function startApp() {
    showView("AppHome");
    
    //ATTACH EVENT HANDLERS
    $("header").find("a[data-target]").click(navigateTo);
    //SUBMIT BUTTONS
    $("#formRegister").submit(registerUser);
    $("#formLogin").submit(loginUser);
    $("#linkMenuLogout").click(logoutUser);
    //PAGE LOAD
    $("#linkMenuShop").click(shopReq);
    $("#linkUserHomeShop").click(()=>{
       showView("Shop");
        shopReq();
    });
    $("#linkMenuCart").click(cartReq);

    //CHECK WHETHER USER IS LOGGED IN/OUT
    if(sessionStorage.getItem("authtoken") ===null){
        loggedOut();
    } else {
        loggedIn();
    }

    //BOTH FUNCTIONS CHECK WHETHER USER IS LOGGED IN/OUT AND SHOW/HIDE MENU
    function loggedIn() {
        $(".anonymous").hide();
        $(".useronly").show();
        $("#spanMenuLoggedInUser").text("Welcome, "+sessionStorage.getItem("username")+"!");
        $("#viewUserHomeHeading").text("Welcome, "+sessionStorage.getItem("username")+"!");
        showView("UserHome");

    }
    function loggedOut() {
        $(".anonymous").show();
        $(".useronly").hide();
        $("#spanMenuLoggedInUser").text("");
        $("#viewUserHomeHeading").text("");
        showView("AppHome");
    }

    //NAVIGATES TO SECTION
    function navigateTo() {
        let target = $(this).attr("data-target");
        showView(target);
    }

    //SHOWS AND HIDES SECTIONS
    function showView(target) {
        $("main >section").hide();
        $("#view"+target).show();
    }

    //REGISTRATION
    function registerUser(ev) {
        ev.preventDefault();
        let username = $("#registerUsername");
        let password = $("#registerPasswd");
        let name = $("#registerName");

        let usernameVal = username.val();
        let passVal = password.val();
        let nameVal = name.val();

        auth.register(usernameVal,passVal,nameVal)
            .then((userInfo)=>{
            username.val("");
            password.val("");
            name.val("");
            saveSession(userInfo);
            auth.showInfo("User registration successful.");
            }).catch(auth.handleError);
    }

    //LOGIN
    function loginUser(ev) {
        ev.preventDefault();

        let username =$("#loginUsername");
        let password = $("#loginPasswd");

        auth.login(username.val(),password.val())
            .then((userInfo) =>{
                username.val("");
            password.val("");
            auth.showInfo("Login successful.");
            saveSession(userInfo);
            }).catch(auth.handleError);
    }

    //LOGOUT
    function logoutUser() {
        auth.logout()
            .then(()=>{
            auth.showInfo("Logout successful.");
            sessionStorage.clear();
            loggedOut();
            })
    }

    //SHOP REQUEST
    function shopReq() {
        requester.get("appdata","products",'kinvey')
            .then((products)=>{
                showShopProducts(products);
            }).catch(auth.handleError);
    }
    //SHOP LOAD ITEMS
    function showShopProducts(products) {
        let container = $("#shopProducts");
            container.empty();
        let table = $("<table>")
            .append($("<thead>")
                .append($("<tr>")
                    .append($("<th>Product</th>"))
                    .append($("<th>Description</th>"))
                    .append($("<th>Price</th>"))
                    .append($("<th>Actions</th>"))));

        let tbody = $("<tbody>");

        for(let product of products){

            let tr = $(`<tr data-id="${product._id}">`);

            tr.append($("<td>").text(`${product.name}`));
            tr.append($("<td>").text(`${product.description}`));
            tr.append($("<td>").text(`${(product.price).toFixed(2)}`));
            tr.append($("<td>")
                .append($("<button>")
                    .text("Purchase")
                    .click(purchase)));
            tr.appendTo(tbody);
        }
        tbody.appendTo(table);
        table.appendTo(container);

        container.append(table);
    }

    //PURCHASE PRODUCT BUTTON
    function purchase() {
        let id = $(this).parent().parent().attr("data-id");

        requester.get("user",`${sessionStorage.getItem("userId")}`,"kinvey")
            .then((userInfo)=>{
                let cart;
                if(userInfo['cart'] === undefined){
                    cart ={};
                }
                else{
                    cart = userInfo.cart;
                }
                if(cart.hasOwnProperty(id)){
                    let quantity = cart[id].quantity;
                    cart[id] = {
                        quantity: Number(cart[id].quantity)+1,
                        product: {
                            name: userInfo.name,
                            description: userInfo.description,
                            price: userInfo.price
                        }
                    }

                } else{
                    requester.get("appdata","products/"+id,`kinvey`)
                        .then((productInfo)=>{
                            cart[id] = {
                                quantity: "1",
                                product: {
                                    name: productInfo.name,
                                    description: productInfo.description,
                                    price: productInfo.price
                                }
                            };
                        })
                        .catch(auth.handleError);
                }

                    for(let el in cart){

                    }
                console.log(userInfo);
                userInfo.cart = cart;
                console.log(JSON.stringify(userInfo.cart));
                console.log(userInfo.cart);


                requester.update("user",sessionStorage.getItem("userId"),"kinvey",userInfo)
                    .then(()=>{

                    auth.showInfo(`Product purchased.`);
                    }).catch(auth.handleError);

            })
            .catch(auth.handleError);
    }

    //CART REQUEST
    function cartReq() {
        requester.get("user",`${sessionStorage.getItem("userId")}`,"kinvey")
            .then((userInfo)=>{
                showCartProducts(userInfo.cart);
            }).catch(auth.handleError);

    }
    //CART LOAD ITEMS
    function showCartProducts(products){
        let container = $("#cartProducts");
        container.empty();
        console.log();
        let table = $("<table>")
            .append($("<thead>")
                .append($("<tr>")
                    .append($("<th>Product</th>"))
                    .append($("<th>Description</th>"))
                    .append($("<th>Quantity</th>"))
                    .append($("<th>Total Price</th>"))
                    .append($("<th>Actions</th>"))));

        let tbody = $("<tbody>");

        for(let product in products) {

            let tr = $(`<tr data-id="${product}">`);
            tr.append($("<td>").text(`${products[product].product.name}`));
            tr.append($("<td>").text(`${products[product].product.description}`));
            tr.append($("<td>").text(`${products[product].quantity}`));
            tr.append($("<td>").text(`${(products[product].quantity * products[product].product.price).toFixed(2)}`));
            tr.append($("<td>")
                .append($("<button>")
                    .text("Discard")
                    .click(discard)));
            tr.appendTo(tbody);
        }
        tbody.appendTo(table);
        table.appendTo(container);
    }

    //DISCARDS PRODUCT FROM CART
    function discard() {
        let id = $(this).parent().parent().attr("data-id");

        requester.get("user",`${sessionStorage.getItem("userId")}`,"kinvey")
            .then((userInfo)=> {

                let name = userInfo.name;
                let cart = userInfo.cart;
                delete cart[id];
                let newCart = {
                    name:name,
                    cart:cart};
                 requester.update("user",sessionStorage.getItem("userId"),"kinvey",newCart)
                 .then(()=>{
                     auth.showInfo("Product discarded.");
                     $(this).parent().parent().remove();
                 })
                 .catch(auth.handleError);
                 })
                 .catch(auth.handleError);

    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        let name = userInfo.name;
        sessionStorage.setItem("name", name);

        loggedIn();
    }
}