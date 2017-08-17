$(() => {
    const app = Sammy('#main', function () {
        this.use("Handlebars", "hbs");
        this.get("index.html", displayHome);
        this.get("#/home",displayHome);
        //ABOUT PAGE
        this.get("#/about", function () {
           this.loadPartials({
               header: "./templates/common/headers.hbs",
               footer:"./templates/common/footer.hbs"
           }).then(function () {
               this.partial("./templates/about/about.hbs");
           })
        });
        // LOGIN PAGE
        this.get("#/login", function (ctx) {
            this.loadPartials({
                header: "./templates/common/headers.hbs",
                footer:"./templates/common/footer.hbs",
                loginForm:"./templates/login/loginForm.hbs"
            }).then(function () {
                this.partial("./templates/login/loginPage.hbs");
            })
        });

        this.post("#/login",function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username,password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo("Logged in!");
                    displayHome(ctx)

                })
                .catch(auth.handleError)
        });
        //LOGOUT PAGE
        this.get("#/logout",function (ctx) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    auth.showInfo("Logged out!");
                    displayHome(ctx)
                })
                .catch(auth.handleError)
        });
        //REGISTER PAGE
        this.get("#/register", function (ctx) {
            ctx.loggedIn = sessionStorage.getItem("authtoken") !== null;
            ctx.username = sessionStorage.getItem("username");
            this.loadPartials({
                header: "./templates/common/headers.hbs",
                footer:"./templates/common/footer.hbs",
                registerForm:"./templates/register/registerForm.hbs"
            }).then(function () {
                this.partial("./templates/register/registerPage.hbs");
            })

        });
        this.post("#/register",function (ctx) {
           let username = ctx.params.username;
           let password = ctx.params.password;
           let repeatPassword = ctx.params.repeatPassword;
           if(password !== repeatPassword){
               auth.handleError("Passwords don't match");
           }else{
               auth.register(username, password)
                   .then(function (userInfo) {
                       auth.saveSession(userInfo);
                       auth.showInfo("Register was successful");
                       displayHome(ctx);
                   })
                   .catch(auth.handleError);
           }
        //CATALOG PAGE
        this.get("#/catalog" ,function (ctx) {
            ctx.loggedIn = sessionStorage.getItem("authtoken") !== null;
            ctx.username = sessionStorage.getItem("username");
            this.loadPartials({
                header: '../templates/common/header.hbs',
                footer: '../templates/common/footer.hbs',
                team: '../templates/catalog/team.hbs'
            }).then(function () {
                teamsService.loadTeams().then(teams => {

                    requester.get('user', sessionStorage.getItem('userId'), 'Kinvey').then((user) => {
                        let isIn = false;
                        if (!user.teamId) {
                            isIn = true;
                        }
                        this.partial('./templates/catalog/teamCatalog.hbs', { teams: teams, hasNoTeam: isIn });

                    });

                });
            });
        })

        });

        function displayHome(ctx) {
            ctx.loggedIn = sessionStorage.getItem("authtoken") !== null;
            ctx.username = sessionStorage.getItem("username");
            ctx.loadPartials({
                header: "./templates/common/headers.hbs",
                footer:"./templates/common/footer.hbs"
            }).then(function () {
                this.partial("./templates/home/home.hbs");

            })
        }



    });

    app.run();
});