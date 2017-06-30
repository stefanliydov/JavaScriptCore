function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyNumber = $('#companyNumber');
    let submitBtn = $('#submit');
    let validationDiv =$('#valid');
    let companyInfo = $('#companyInfo');
    let allisValid = true;
    companyCheckbox.on('change', function () {
        if(companyCheckbox.is(":checked")){
            companyInfo.css("display", "block");
        }
        else{
            companyInfo.css("display", "none");
        }
    });
    submitBtn.on('click',function (ev) {
        ev.preventDefault();
        allisValid = true;
        validateForm();
        validationDiv.css("display", allisValid? "block":"none");
    })
    function validateForm() {
        validateWithRegex(username, /^[a-zA-Z0-9]{3,20}$/g);
        validateWithRegex(email, /^.*?@.*?\..*?$/g);

        if(password.val() === confirmPassword.val()){
            validateWithRegex(password,/^\w{5,15}$/g);
            validateWithRegex(confirmPassword, /^\w{5,15}$/g);
        }else{
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red')
            allisValid = false;
        }
        if(companyCheckbox.is(":checked")){
            if(companyNumber.val()>=1000 &&companyNumber.val()<=9999){

                companyNumber.css('border', 'none');
            }
            else {
                companyNumber.css('border', 'solid red')
                allisValid = false;
            }
        }
    }
    function validateWithRegex(input, pattern) {
        if(pattern.test(input.val())){
            input.css('border', 'none');
        }
        else{
            input.css('border', 'solid red')
            allisValid = false;
        }
    }
}