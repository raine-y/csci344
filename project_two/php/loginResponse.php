<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <?php
    session_start();
    include "connectToDatabase.php";
    $query = "SELECT * FROM Users WHERE username = '$_POST[login_username]'";
    $rowsWithMatchingLoginName = mysqli_query($db, $query);
    $numRecords = mysqli_num_rows($rowsWithMatchingLoginName);
    if ($numRecords == 0) {
        echo "<h3>Login name not found. Please try again.</h3>";
    }
    if ($numRecords == 1) {
        $row = mysqli_fetch_array($rowsWithMatchingLoginName, MYSQLI_ASSOC);
        if ($_POST['password'] == $row['user_login']) {
            echo "<h3>Login successful. Welcome, " . $row['username'] . "!</h3>";
        } else {
            echo "<h3>Incorrect password. Please try again.</h3>";
        }
        header($goto);
    } else {
        header("Location: ../pages/loginForm.php?retrying=true");
    }
    mysqli_close($db);
    ?>
</body>

</html>