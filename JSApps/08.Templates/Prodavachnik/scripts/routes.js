const app = Sammy('#content', function () {
    this.use('Handlebars', 'hbs');

    function isLogged() {
        if (sessionStorage.getItem('authToken') === null) {
            return false;
        }
        return true;
    }

    this.get('/', function () {
        this.isLogged = isLogged();
        this.loadPartials({
            header: './templates/partials/header.hbs',
            footer: './templates/partials/footer.hbs'
        }).then(function () {
            this.partial('./templates/homeView.hbs');
        });

    });

    this.get('#/login', function () {
        this.viewName = 'viewLogin';
        this.viewTitle = 'Login';
        this.action = 'login';

        this.loadPartials({
            header: './templates/partials/header.hbs',
            footer: './templates/partials/footer.hbs'
        }).then(function () {
            this.partial('./templates/loginRegisterView.hbs');
        });

    });

    this.post('#/login', function () {
        loginController(this.params.username, this.params.passwd).then(() => {
            this.redirect('/');
        }).catch(() => {

        });
    });


    this.get('#/register', function () {
        this.viewName = 'viewRegister';
        this.viewTitle = 'Register';
        this.action = 'register';

        this.loadPartials({
            header: './templates/partials/header.hbs',
            footer: './templates/partials/footer.hbs'
        }).then(function () {
            this.partial('./templates/loginRegisterView.hbs');
        });
    });

    this.post('#/register', function () {
        registerController(this.params.username, this.params.passwd).then(() => {
            this.redirect('/');
        }).catch(() => {

        });
    });


    this.get('#/logout', function () {
        logoutController().then(() => {
            this.redirect('/');
        }).catch(() => {

        });
    });


    this.get('#/list', function () {
        this.isLogged = isLogged();



        this.loadPartials({
            header: './templates/partials/header.hbs',
            footer: './templates/partials/footer.hbs'
        }).then(function () {

            loadAdsController().then(() => {
                let data = loadedData;

                for (let ad of data) {
                    if(ad._acl.creator === sessionStorage.getItem('userId')){
                        ad.isAuthor = true;
                    }           
                }

                this.partial('./templates/listAdsView.hbs', { ads: data });
            });

        });

    });

    this.get('#/delete/:id', function () {
        deleteAdController(this.params.id).then(() => {
            this.redirect('#/list');
        });
    });


    this.get('#/new', function () {
        this.isLogged = isLogged();
        this.viewName = 'viewCreateAd';
        this.title = 'Create new Advertisement';
        this.buttonName = 'Create';
        this.action = 'new';

        this.loadPartials({
            header: './templates/partials/header.hbs',
            footer: './templates/partials/footer.hbs'
        }).then(function () {
            this.partial('./templates/newEditAdView.hbs');
        });
    });

    this.post('#/new', function () {
        let publisher = sessionStorage.getItem('username');
        createAdController(this.params.title, this.params.description, publisher, this.params.datePublished, this.params.price, this.params.image).then(() => {
            this.redirect('#/list');
        });
    });

    this.get('#/edit/:id', function () {
        this.isLogged = isLogged();
        this.viewName = 'viewEditeAd';
        this.title = 'Edit Advertisement';
        this.buttonName = 'Edit';
        this.action = 'edit';

        getAdController(this.params.id).then(() => {

            this.loadPartials({
                header: './templates/partials/header.hbs',
                footer: './templates/partials/footer.hbs'
            }).then(function () {
                this.partial('./templates/newEditAdView.hbs', { ad: adData });
            });
        });

    });

    this.post('#/edit', function () {
        let publisher = sessionStorage.getItem('username');
        editAdController(this.params.title, this.params.description, publisher, this.params.datePublished, this.params.price, this.params.image, this.params.id).then(() => {
            this.redirect('#/list');
        });
    });

     this.get('#/view/:id', function () {
     this.isLogged = isLogged();
        getAdController(this.params.id).then(() => {
            this.loadPartials({
                header: './templates/partials/header.hbs',
                footer: './templates/partials/footer.hbs'
            }).then(function () {
                console.log(adData);
                this.partial('./templates/adInfoView.hbs', { ad: adData });
            });
        });

    });

});

$(() => {
    app.run();
})