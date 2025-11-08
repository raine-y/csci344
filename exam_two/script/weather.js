function weatherReport() {
    var feedbackFormObj = document.getElementById("weatherForm");
    if (feedbackFormValidate(feedbackFormObj)) {
        alert("Input received!");
        displayResults();

    }
}

function feedbackFormValidate(feedbackFormObj) {
    var temp = feedbackFormObj.temp.value;
    var tempOK;

    tempOK = tempValid(temp);

    return tempOK;
}

function tempValid(temp) {
    var regx = temp.search(/^[-0-9]+$/);
    if (temp == "") {
        alert("Error: No entry");
        return false;
    } else if (regx == 0) {
        return true;
    } else {
        alert("Error: Invalid entry");
        return false;
    }
}

function displayResults() {

    var feedbackFormObj = document.getElementById("weatherForm");

    var fahrenheitEntry = document.getElementById("fahrenheitResultP");
    var celsiusEntry = document.getElementById("celsiusResultP");
    var rainEntry = document.getElementById("rainCheckP");

    var temp = feedbackFormObj.temp.value;
    var method = feedbackFormObj.tempType.value;
    var rain = feedbackFormObj.rainType.value;

    var jacketItem = document.getElementById("jacket");
    var umbrellaItem = document.getElementById("umbrella");

    if (method == "fahrenheit") {
        var fahrenheit = temp;
        var celsius = fahrToCels(temp);
        fahrenheitEntry.textContent = '\u00a0' + fahrenheit + '\xB0';
        celsiusEntry.textContent = '\u00a0' + celsius.toFixed(1) + '\xB0';
        if (fahrenheit <= 50) {
            jacketItem.style.display = "block";
        } else {
            jacketItem.style.display = "none";
        }
    }

    if (method == "celsius") {
        var celsius = temp;
        var fahrenheit = celsToFahr(temp);
        celsiusEntry.textContent = '\u00a0' + celsius + '\xB0';
        fahrenheitEntry.textContent = '\u00a0' + fahrenheit.toFixed(1) + '\xB0';
        if (fahrenheit <= 50) {
            jacketItem.style.display = "block";
        } else {
            jacketItem.style.display = "none";
        }
    }

    if (rain == "yes") {
        rainEntry.textContent = '\u00a0' + "Yes";
        umbrellaItem.style.display = "block";
    }

    if (rain == "no") {
        rainEntry.textContent = '\u00a0' + "No";
        umbrellaItem.style.display = "none";
    }
}

function fahrToCels(t) {
    c = (t - 32.0) / (9.0 / 5.0);
    return c;
}

function celsToFahr(t) {
    f = t * (9 / 5) + 32;
    return f;
}