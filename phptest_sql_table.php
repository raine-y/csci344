<DOCTYPE html>
    <html lang="en">

    <head>
        <title>whatever</title>
    </head>

    <body>
        <h1>
            Welcome to PHP test
        </h1>
        <?php
        $servername = "avl.cs.unca.edu";
        $username = "hwalker2";
        $password = "EntwineZap";
        $dbname = "csci344fal25";
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";
        echo "<h2> date " . date("l, F jS") . ".<br>\r\n";
        echo "<h2> time " . date("g:ia") . ".<br>\r\n";

        $conn->close();
        ?>
        <h2>php shesh</h2>
    </body>

    </html>