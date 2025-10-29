<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../style/feedback.css" />
    <title>Feedback</title>
</head>

<body>
    <div id="container">
        <!------------------------------------------------------------------------------------------------------>
        <!-- TO SWITCH TO GET METHOD, UNCOMMENT LINE 5 IN script/form.js AND COMMENT LINE 6 IN script/form.js -->
        <!------------------------------------------------------------------------------------------------------>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            echo "<h2><i>With POST:</i></h2>";
            $fName = $_POST["firstName"];
            $lName = $_POST["lastName"];
            $email = $_POST["email"];
            $pNumber = $_POST["phone"];
            $comment = $_POST["comments"];
            echo "| Name: ", $fName, " ", $lName, "<br>";
            echo "| Email: ", $email, "<br>";
            echo "| Phone Number: ", $pNumber, "<br>";
            echo "|", "<br>";
            echo "| Your comment was: ", $comment, "<br>";
        }
        if ($_SERVER["REQUEST_METHOD"] == "GET") {
            echo "<h2><i>With GET:</i></h2>";
            $fName = $_GET["firstName"];
            $lName = $_GET["lastName"];
            $email = $_GET["email"];
            $pNumber = $_GET["phone"];
            $comment = $_GET["comments"];
            echo "| Name: ", $fName, " ", $lName, "<br>";
            echo "| Email: ", $email, "<br>";
            echo "| Phone Number: ", $pNumber, "<br>";
            echo "|", "<br>";
            echo "| Your comment was: ", $comment, "<br>";
        }
        ?>
    </div>
</body>

</html>