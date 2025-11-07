function feedbackFormProcess() {
    var feedbackFormObj = document.getElementById("feedbackForm");
    if (feedbackFormValidate(feedbackFormObj)) {
        alert("Thank you for your feedback!");
        // feedbackFormObj.method = "get"; // UNCOMMENT THIS LINE TO USE GET 
        feedbackFormObj.method = "post";   // COMMENT THIS LINE TO USE GET
        feedbackFormObj.action = "php/feedback.php";
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
    lastNameOK = lastNameValid(lastName);
    emailOK = emailValid(email);
    phoneOK = phoneValid(phone);
    commentsOK = commentsValid(comments);

    return firstNameOK && lastNameOK && emailOK && phoneOK && commentsOK;
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

function commentsValid(comments) {
    if (comments == "") {
        alert("Error: Please input your comments.");
        return false;
    }
    return true;
}