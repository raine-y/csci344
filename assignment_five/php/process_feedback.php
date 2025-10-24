<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../style/feedback.css" />
    <title>Feedback</title>
</head>
<body>
    <div id="getContainer">
        Welcome <?php echo $_GET["firstName"], " ", $_GET["lastName"]; ?><br>
        Your email address is: <?php echo $_GET["email"]; ?><br>
        Your phone number is: <?php echo $_GET["phone"]; ?><br>
        You said: <?php echo $_GET["comments"]; ?>
    </div>
    <div id="postContainer">

    </div>
</body>
</html>