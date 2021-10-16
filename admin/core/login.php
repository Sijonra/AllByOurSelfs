<?php

$login = "admin";
$password = "admin";

if($_POST["name"] === $admin && $_POST["password"] === $password){
    session_start();
    
    $_SESSION["login"] = $_POST["login"];
    $_SESSION["password"] = $_POST["password"];
    
    header('Location: /admin');

}
else{
    // echo "POSHEL NAHUI";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style>
        body{
            background: url('ogo-poshelnahui.jpg');
        }
    </style>
</body>
</html>