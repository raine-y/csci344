function bmiFormProcess() {
    var bmiFormObj = document.getElementById("bmiForm");
    if (bmiFormValidate(bmiFormObj)) {
        var bmi = valueOfBMI(bmiFormObj);
        if (bmiFormObj.details.checked)
            displayDetails(bmiFormObj, bmi);
        else
            alert("Your BMI: " + valueTo1DecimalPlace(bmi));
    }
}
function bmiFormValidate(bmiFormObj)
{
    var hUnit = bmiFormObj.heightUnit.
        options[bmiFormObj.heightUnit.selectedIndex].text;
    var wUnit = bmiFormObj.weightUnit.
        options[bmiFormObj.weightUnit.selectedIndex].text;
    var height = bmiFormObj.height.value;
    var weight = bmiFormObj.weight.value;
    var email = bmiFormObj.email.value;
    var heightOK, weightOK, emailOK;

    if (hUnit == "inches")
        heightOK = inchesValid(height);
    else
        heightOK = centimetresValid(height);
    
    if (wUnit == "pounds")
        weightOK = poundsValid(weight);
    else
        weightOK = kilogramsValid(weight);
    
    if (bmiFormObj.wantMail.checked)
    {
        emailOK = emailValid(email);
        alert("Warning: The e-mail feature is currently not supported.")
    }
    else
        emailOK = true;
    
    return heightOK && weightOK && emailOK;
}
function inchesValid(height)
{
    if (height == "" || isNaN(height))
    {
        alert("Error: Please input a number for height.");
        return false;
    }
    if (height < 0 || height > 100)
    {
        alert("Error: Height must be in the range 0-100 inches.");
        return false;
    }
    return true;
}
function centimetresValid(height)
{
    if (height == "" || isNaN(height))
    {
        alert("Error: Please input a number for height.");
        return false;
    }
    if (height < 0 || height > 300)
    {
        alert("Error: Height must be in the range 0-300 centimeters.");
        return false;
    }
    return true;
}
function poundsValid(weight)
{
    if (weight == "" || isNaN(weight))
    {
        alert("Error: Please input a number for weight.");
        return false;
    }
    if (weight < 0 || weight > 1000)
    {
        alert("Error: Weight must be in the range 0-1000 pounds.");
        return false;
    }
    return true;
}
function kilogramsValid(weight)
{
    if (weight == "" || isNaN(weight))
    {
        alert("Error: Please input a number for weight.");
        return false;
    }
    if (weight <= 0 || weight > 500)
    {
        alert("Error: Weight must be in the range 0-500 kilograms.");
        return false;
    }
    return true;
}
function emailValid(address)
{
    var p = address.search(/.+@.+/);
    if (p == 0)
        return true;
    else
    {
        alert("Error: Invalid e-mail address.");
        return false;
    }
}
function valueOfBMI(bmiFormObj)
{
    var hUnit = bmiFormObj.heightUnit.
        options[bmiFormObj.heightUnit.selectedIndex].text;
    var wUnit = bmiFormObj.weightUnit.
        options[bmiFormObj.weightUnit.selectedIndex].text;
    var height = bmiFormObj.height.value;
    var weight = bmiFormObj.weight.value;

    if (hUnit == "inches") height = inchesToCentimetres(height);
    if (wUnit == "pounds") weight = poundsToKilograms(weight);
    
    height /= 100.0; //Convert height from centimeters to meters
    var bmi = weight/(height*height); //kilograms/(meters*meters)
    return bmi;
}
function inchesToCentimetres(height)
{
    var CENTIMETRES_PER_INCH = 2.54;
    return height * CENTIMETRES_PER_INCH;
}

function poundsToKilograms(weight)
{
    var POUNDS_PER_KILOGRAM = 2.20462;
    return weight / POUNDS_PER_KILOGRAM;
}
///////////
function displayDetails(bmiFormObj, bmi)
{
    var hUnit = bmiFormObj.heightUnit.
        options[bmiFormObj.heightUnit.selectedIndex].text;
    var wUnit = bmiFormObj.weightUnit.
        options[bmiFormObj.weightUnit.selectedIndex].text;
    var height = bmiFormObj.height.value;
    var weight = bmiFormObj.weight.value;
    var text = "BMI Report\n" +
        "Your weight: " + weight + " " + wUnit + "\n" +
        "Your height: " + height + " " + hUnit + "\n" +
        "Your BMI: " + valueTo1DecimalPlace(bmi) + "\n";
    if (bmi < 18.5)
        text += "Your BMI suggests that you are underweight.\n";
    else if (bmi < 25)
        text += "Your BMI suggests that you have a reasonable weight.\n";
    else if (bmi < 29)
        text += "Your BMI suggests that you may be overweight.\n";
    else
        text += "Your BMI suggests that you may be obese.\n";
    alert(text);
}
function valueTo1DecimalPlace(num)
{
    var intPortion = Math.floor(num);
    var decimalPortion = Math.round(num*10)%10;
    var text = intPortion + "." + decimalPortion;
    return text;
}