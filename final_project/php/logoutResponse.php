<?php
session_start();
$_SESSION = []; // Unset all of the session variables.
session_destroy();
header('Location: ../index.php');