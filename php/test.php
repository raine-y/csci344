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

    for ($i = 0; $i < 10; $i++) {
        if ($i == 5)
            continue;
        echo $i;
    }

    for ($i = 0; $i <= 1000; $i+=100) {
        if ($i == 500)
            continue;
        echo $i;
    }

    $members = array("John" => "35", "Mary" => "36", "Bob" => "37");
    foreach ($members as $x) {
        echo $x;
    }

    function sumMyNumbers(...$x) { // ... == unknown amount of arguments
        $sum = 0;
        foreach ($x as $num) {
            $sum += $num;
        }
        return $sum;
    }
    ?>
</body>

</html>

<!-- test in terminal $ php -a -->
<!-- I gotta make a server...  -->