function startApp() {

    //Constants
    const appkey = 'kid_ByoBixbPW';
    const appsecret = 'd13a7180487044f68c494a4e55b4c026';


    //Loading
    let loadingBox = $('#loadingBox');
    $(document).ajaxStart(function () {
        loadingBox.css('display', 'block');
    });

    $(document).ajaxStop(function () {
        loadingBox.css('display', 'none');
    });

    //Error Handling
    let errorBox = $('#errorBox');
    function handleError(error) {
        console.log(error.responseText);
        showError(JSON.parse(error.responseText).description);
    }

    //Show info
    let infoBox = $('#infoBox');
    function showInfo(message) {
        infoBox.text(message);
        infoBox.css('display', 'block');
        setTimeout(() => {
            infoBox.fadeOut(1000);
        }, 2000)
    }

    function showError(message) {
        errorBox.text(message);
        errorBox.css('display', 'block');
        errorBox.on('click', () => {
            errorBox.css('display', 'none');
        });
    }

    //Controllers
    //User login

    async function loginController(username, password) {
        let data = {
            username: username,
            password: password
        }

        let req = {
            method: 'POST',
            url: `https://baas.kinvey.com/user/${appkey}/login`,
            headers: {
                'Authorization': `Basic ${btoa(appkey + ':' + appsecret)}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            success: successLogin,
            error: handleError
        }

        await $.ajax(req);

        function successLogin(data) {
            sessionStorage.setItem('authToken', data._kmd.authtoken);
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('userId', data._id);
        }
    }
    window.loginController = loginController;

    //User Logout
    async function logoutController() {
        let req = {
            method: 'POST',
            url: `https://baas.kinvey.com/user/${appkey}/_logout`,
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            success: successLogout,
            error: handleError
        }

        await $.ajax(req);

        function successLogout(data) {
            sessionStorage.clear();
        }
    }

    window.logoutController = logoutController;


    //User Register
    async function registerController(username, password) {

        let data = {
            username: username,
            password: password
        }

        let req = {
            method: 'POST',
            url: `https://baas.kinvey.com/user/${appkey}`,
            headers: {
                'Authorization': `Basic ${btoa(appkey + ':' + appsecret)}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            success: successReg,
            error: handleError
        }

        await $.ajax(req);



        function successReg(data) {
            sessionStorage.setItem('authToken', data._kmd.authtoken);
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('userId', data._id);
            showInfo(username + ' registered successfully');
        }
    }

    window.registerController = registerController;

    //Ads
    //Get ads
    async function loadAdsController() {


        let req = {
            method: 'GET',
            url: `https://baas.kinvey.com/appdata/${appkey}/ads`,
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            success: successLoad,
            error: handleError
        }

        await $.ajax(req);

        function successLoad(data) {
            window.loadedData = data;
        }



    }


    window.loadAdsController = loadAdsController;


    //Delete ad
    async function deleteAdController(creatorId) {
        let req = {
            method: 'DELETE',
            url: `https://baas.kinvey.com/appdata/${appkey}/ads/${creatorId}`,
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            success: successDelete,
            error: handleError
        }

        await $.ajax(req);

        function successDelete(data) {
            showInfo('Ad delete successfully!');
        }
    }

    window.deleteAdController = deleteAdController;



    //Create ad
    async function createAdController(title, description, publisher, datePublished, price, image) {

        let data = {
            title: title,
            description: description,
            publisher: publisher,
            datePublished: datePublished,
            price: price,
            image: image
        }

        let req = {
            method: 'POST',
            url: `https://baas.kinvey.com/appdata/${appkey}/ads`,
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            success: successAdded,
            error: handleError
        }

        await $.ajax(req);

        function successAdded(data) {
            showInfo('Ad added successfully');
        }
    }

    window.createAdController = createAdController;

    //Get ad by id
    async function getAdController(id) {

        let req = {
            method: 'GET',
            url: `https://baas.kinvey.com/appdata/${appkey}/ads/${id}`,
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            success: successLoad,
            error: handleError
        }

        await $.ajax(req);

        function successLoad(data) {
            window.adData = data;
        }

    }

    window.getAdController = getAdController;


    //Edit Ad
    async function editAdController(title, description, publisher, datePublished, price, image, id) {

        let data = {
            title: title,
            description: description,
            publisher: publisher,
            datePublished: datePublished,
            price: price,
            image: image
        }

        let req = {
            method: 'PUT',
            url: `https://baas.kinvey.com/appdata/${appkey}/ads/${id}`,
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            success: successUpdate,
            error: handleError
        }

        await $.ajax(req);

        function successUpdate(data) {
            showInfo('Ad updated successfully');
        }

    }

    window.editAdController = editAdController;

}