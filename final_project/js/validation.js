function validateRegistration() {
    var registrationObj = document.getElementById("registrationForm");
    if (registrationFormValidate(registrationObj)) {
        alert("Thank you!");
        registrationObj.action = "registrationResponse.php";
    }
}

function registrationFormValidate(registrationObj) {
    var email = registrationObj.email.value;
    var country = registrationObj.country.value;
    var password = registrationObj.password.value;
    var passwordConfirm = registrationObj.confirmPassword.value;
    var countryOK, emailOK, passwordMatch;

    emailOK = emailValid(email);
    countryOK = countryValid(country);
    passwordMatch = passwordValid(password, passwordConfirm)

    return emailOK && countryOK && passwordMatch;
}

function emailValid(email) {
    var regx = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (regx == 0)
        return true;
    else {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

function countryValid(country) {
    document.getElementById("country").value = country;
    if (country == "NULL") {
        alert("Error: Please select your country.");
        return false;
    } else {
        return true;
    }
}

function passwordValid(password, passwordConfirm) {
    if (password !== passwordConfirm) {
        alert("Error: Passwords do not match.");
        return false;
    } else {
        return true;
    }
}