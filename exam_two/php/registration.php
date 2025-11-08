<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you!</title>
</head>

<body>
    <?php

    echo "I do not have permission to write to file.", "<br >";
    echo "Or for using chmod.", "<br >";
    echo "Which makes sense to be fair...  ", "<br >";
    echo "But I cannot come up with another solution for writing to a .txt that doesn't need write permission.", "<br >";
    echo "So I hope this counts :-)", "<br >", "<br >";

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $fName = $_POST["firstName"];
    $lName = $_POST["lastName"];
    $email = $_POST["email"];
    $pNumber = $_POST["phone"];
    $file = __DIR__ . '/userdata.txt';
    echo "| Name: ", $fName, " ", $lName, "<br>";
    echo "| Email: ", $email, "<br>";
    echo "| Phone Number: ", $pNumber, "<br>";
    echo "Saving to current working directory: ";
    echo getcwd() . "\n", "<br >", "<br >";
    echo '<img src="../asset/incident_xkcd.png" width="500" height="auto">', "<br >", "<br >";
    echo "Credit: xkcd: ", "<a>https://xkcd.com/838/</a>", "<br >";
    $data = $fName . '-' . $lName . '-' . $email . '-' . $pNumber . "\r\n";
    $ret = file_put_contents($file, $data, FILE_APPEND | LOCK_EX);
    if ($ret === false) {
        die('There was an error writing this file');
    } else {
        echo "$ret bytes written to file";
    }
    ?>
</body>

</html>