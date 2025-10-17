<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>

<body>
    <?php
    $var1 = "Hello World!";
    $var2 = "Hi";
    echo "Today is " . date("Y/m/d") . "<br>";
    echo "Today is " . date("Y.m.d") . "<br>";
    echo "Today is " . date("Y-m-d") . "<br>";
    echo "Today is " . date("l");
    function test()
    {
        echo "This is a test function.";
    }
    test();
    $GLOBALS[""] = "";
    ?>
</body>

</html>

<!-- test in terminal $ php -a -->
<!-- I gotta make a server...  -->