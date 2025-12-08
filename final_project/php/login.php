<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/fonts.css" />
    <link rel="stylesheet" href="../css/login.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <header
        <main>
        <a id="homeBtn" href="../index.php">Return Home</a>
        <article class="login">
            <h4>Login</h4>
            <form method="post" action="loginResponse.php">
                <label for="login_username">Username:</label>
                <input type="text" id="login_username" name="login_username" required><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br><br>
                <div id="inputs">
                    <input type="submit" value="Login">
                    <p>- or -</p>
                    <a href="registration.php">Register</a>
                </div>
            </form>
        </article>
        </main>
</body>

</html>