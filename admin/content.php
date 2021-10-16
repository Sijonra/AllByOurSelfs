<?php

    session_start();

    $login = "admin";
    $password = "admin";

    if($_SESSION["login"] !== $login || $_SESSION["password"] !== $password){
        header('Location: /admin');
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./admin.css">
    <title>Document</title>
</head>
<body>
    
    <a href="./core/logout.php" class="logout-button">Logout</a>

</body>
</html>