<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exam Two</title>
    <link rel="stylesheet" type="text/css" href="style/index.css" />
    <script src="script/weather.js" defer></script>
</head>

<body>
    <div id="weather">
        <div id="weatherContainer">
            <form id="weatherForm" onsubmit="weatherReport(); return false">
                <fieldset class="SectionBackground">
                    <legend class="LegendBackground">Weather Reference Input</legend>
                    <table>
                        <tr>
                            <td id="tempField" class="tdSpace">
                                <label for="temp">
                                    temperature:
                                </label>
                            </td>
                            <td>
                                <input id="temp" type="text" name="temp" size="12" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="radio" id="fahrenheit" name="tempType" value="fahrenheit" checked />
                                <label for="fahrenheit">Fahrenheit</label>
                            </td>
                            <td class="tdSpace">
                                <input type="radio" id="celsius" name="tempType" value="celsius" />
                                <label for="celsius">Celsius</label>
                            </td>
                        </tr>
                        <tr>
                            <td id="rainField" class="tdSpace">
                                <label for="rainType">
                                    Is it raining:
                                </label>
                            </td>
                            <td class="tdSpace">
                                <input type="radio" id="rain" name="rainType" value="yes" />
                                <label for="celsius">Yes</label>
                            </td>
                            <td>
                                <input type="radio" id="fahrenheit" name="rainType" value="no" checked />
                                <label for="fahrenheit">No</label>
                            </td>
                        </tr>
                        <tr>
                            <td class="tdSpace">
                                <input type="submit" value="Submit feedback" />
                            </td>
                            <td>
                                <input type="reset" value="Reset form" />
                            </td>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </div>
        <div id="weatherResults">
            <h3>
                Results
            </h3>
            <h4>
                Temperature
            </h4>
            <div class="tempResult" id="fahrenheitResult">
                <p>
                    Fahrenheit: 
                </p>
                <p id="fahrenheitResultP">

                </p>
            </div>
            <div class="tempResult" id="celsiusResult">
                <p >
                    Celsius:
                </p>
                <p id="celsiusResultP">

                </p>
            </div>
            <div id="rainCheck">
                <h4>
                    Rain: 
                </h4>
                <p id="rainCheckP">

                </p>
            </div>
            <h4>
                You Should:
            </h4>
            <div id="youShould">
                <p id="youShouldP">
                    
                </p>
            </div>
        </div>
    </div>
    <div>

    </div>
</body>

</html>