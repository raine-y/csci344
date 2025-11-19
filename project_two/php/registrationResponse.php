<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/registration.css" />
    <?php include "connectToDatabase.php"; ?>
    <title>Registration</title>
</head>

<body>

</body>

</html>

<?php

$name = $_POST["name"];
$username = $_POST["username"];
$email = $_POST["email"];
$country = $_POST["country"];
$password = $_POST["password"];

if (emailAlreadyExists($db, $_POST["email"])) {
    echo "<h3>Sorry, but your e-mail
address is already registered.</h3>";
} else {
    $query = "INSERT INTO Users(
name,
username,
email,
country,
user_login
)
VALUES (
'$name',
'$username',
'$email',
'$country',
'$password'
);";

$success = mysqli_query($db, $query);
echo "<h3 id='registrationNotification'>Thank you for registering!</h3>";
}

mysqli_close($db);

function emailAlreadyExists($db, $email)
{
$query =
"SELECT *
FROM Users
WHERE email = '$email'";
$users = mysqli_query($db, $query);
$numRecords = mysqli_num_rows($users);
return ($numRecords > 0) ? true : false;
}

?>

<!--
CREATE TABLE Users (
name varchar(255),
username varchar(255),
email varchar(255),
country varchar(255),
user_login varchar(255)
);
-->