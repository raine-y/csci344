function registrationFormProcess() {
    var registrationFormObj = document.getElementById("registrationForm");
    if (registrationFormValidate(registrationFormObj)) {
        alert("Thank you!");
        registrationFormObj.action = "php/registration.php";
    }
}

function registrationFormValidate(registrationFormObj) {
    var firstName = registrationFormObj.firstName.value;
    var lastName = registrationFormObj.lastName.value;
    var email = registrationFormObj.email.value;
    var phone = registrationFormObj.phone.value;
    var firstNameOK, lastNameOK, emailOK, phoneOK;

    firstNameOK = nameValid(firstName);
    lastNameOK = lastNameValid(lastName);
    emailOK = emailValid(email);
    phoneOK = phoneValid(phone);

    return firstNameOK && lastNameOK && emailOK && phoneOK;
}

function nameValid(firstName) {
    var regx = firstName.search(/^[-'\w\s]+$/);
    if (firstName == "") {
        alert("Error: Please input your first name.");
        return false;
    } else if (regx == 0) {
        return true;
    } else {
        alert("Error: Invalid first name.");
        return false;
    }
}
function lastNameValid(lastName) {
    var regx = lastName.search(/^[-'\w\s]+$/);
    if (lastName == "") {
        alert("Error: Please input your last name.");
        return false;
    } else if (regx == 0) {
        return true;
    } else {
        alert("Error: Invalid last name.");
        return false;
    }
}
function emailValid(email) {
    var regx = email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (email == "") {
        alert("Error: Please input your email.")
        return false;
    } else if (regx == 0)
        return true;
    else {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

function phoneValid(phone) {
    var regx1 = phone.search(/^\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/);
    var regx2 = phone.search(/^\d{3}[-\s]{0,1}\d{4}$/);
    if (phone == "") {
        alert("Error: Please input your phone number.")
        return false;
    } else if (regx1 == 0 || regx2 == 0)
        return true;
    else
        alert("Error: Invalid phone number.");
    return false;
}