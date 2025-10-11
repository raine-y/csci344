function feedbackFormProcess() {
    var feedbackFormObj = document.getElementById("feedbackForm");
    if (feedbackFormValidate(feedbackFormObj)) {
        alert("Thank you for your feedback!");
    }
}

function feedbackFormValidate(feedbackFormObj) {
    var firstName = feedbackFormObj.firstName.value;
    var lastName = feedbackFormObj.lastName.value;
    var email = feedbackFormObj.email.value;
    var phone = feedbackFormObj.phone.value;
    var comments = feedbackFormObj.comments.value;
    var firstNameOK, lastNameOK, emailOK, phoneOK, commentsOK;

    firstNameOK = nameValid(firstName);
    lastNameOK = lastNameValid(lastName)
    emailOK = emailValid(email);
    phoneOK = phoneValid(phone);
    commentsOK = commentsValid(comments);

    return firstNameOK && lastNameOK && emailOK && phoneOK && commentsOK;
}
function nameValid(firstName) {
    if (firstName == "") {
        alert("Error: Please input your first name.");
        return false;
    }
    return true;
}
function lastNameValid(lastName) {
    if (lastName == "") {
        alert("Error: Please input your last name.");
        return false;
    }
    return true;
}
function emailValid(email) {
    var c = email.search(/.+@.+/);
    if (email == "") {
        alert("Error: Please input your email.")
        return false;
    }
    if (c == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}
function phoneValid(phone) {
    if (phone == "") {
        alert("Error: Please input your phone number.")
        return false;
    }
    return true;
}
function commentsValid(comments) {
    if (comments == "") {
        alert("Error: Please input your comments.");
        return false;
    }
    return true;
}