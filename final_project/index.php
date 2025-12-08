<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/fonts.css" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/navigation.css" />
  <title>Home</title>
</head>
<body>
  <div id="navigation">
    <h1 id="nameForeground">
      <a href="index.php">Company_Name</a>
    </h1>
    <ul id="pageNav">
      <li id="productsWrapper">
        <a id="products" href="product.php">&#9662; Products</a>
        <div class="dropdownLinks">
          <a href="#">Product 1</a>
          <a href="#">Product 2</a>
          <a href="#">Product 3</a>
          <a href="#">Product 4</a>
        </div>
      </li>
      <li>
        <a href="contact.php">Contact Us</a>
      </li>
    </ul>
    <ul id="accountNav">
      <?php
      session_start();
      if ($_SESSION['username'] == true) {
        echo '
        <li> Hey, ', $_SESSION['username'], '</li>
         <li> 
            <p>/</p>
          </li>
          <li>
            <a id="logout" href="php/logoutResponse.php">Logout</a>
          </li>';
      } 
      else {
        echo $_SESSION['username'];
        echo '
          <li> 
            <a href="php/login.php">Login</a> 
          </li> 
          <li> 
            <p>/</p>
          </li>
          <li>
            <a href="php/registration.php">Register</a>
          </li>';
      }
      ?>
    </ul>
  </div>
</body>
</html>