<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>

<body>
    <main>
        <article class="Login">
            <h4>Login Form</h4>
            <form method="post" action="loginResponse.php">
                <label for="login_username">Username:</label>
                <input type="text" id="login_username" name="login_username" required><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br><br>
                <input type="submit" value="Login">
            </form>
        </article>
    </main>
</body>

</html>