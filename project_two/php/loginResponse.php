<?php
session_start();
include "connectToDatabase.php";
$query = "SELECT * FROM Users
WHERE login_username = '$_POST[username]'";
$rowsWithMatchingLoginName = mysqli_query($db, $query);
$numRecords = mysqli_num_rows($rowsWithMatchingLoginName);
if ($numRecords == 0) {
    echo "<h3>Login name not found. Please try again.</h3>";
}
if ($numRecords == 1) {
    $row = mysqli_fetch_array($rowsWithMatchingLoginName, MYSQLI_ASSOC);
    if ($_POST['loginPassword'] == $row['login_password']) {
        $_SESSION['customer_id'] = $row['customer_id'];
        $_SESSION['salutation'] = $row['salutation'];
        $_SESSION['customer_first_name'] = $row['customer_first_name'];
        $_SESSION['customer_middle_initial'] =
            $row['customer_middle_initial'];
        $_SESSION['customer_last_name'] = $row['customer_last_name'];
        $productID = $_SESSION['purchasePending'];
        if ($productID != "") {
            unset($_SESSION['purchasePending']);
            $destination =
                "../pages/shoppingCart.php?productID=$productID";
            $goto = "Location: $destination";
        } else {
            $destination = getenv('HTTP_REFERER');
            $goto = "Location: " . $destination;
        }
        header($goto);
    } else {
        header("Location: ../pages/loginForm.php?retrying=true");
    }
}
mysqli_close($db);
?>