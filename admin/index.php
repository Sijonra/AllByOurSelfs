<?php

    session_start();

    $login = "admin";
    $password = "admin";

    if($_SESSION["login"] === $login && $_SESSION["password"] === $password){
        header('Location: content.php');
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
    
    <main class="wrapper">

        <form action="./core/login.php" method="post" class="login-form">

            <h1 class="login-form__title">
                авторизация
            </h1>

            <div class="login-form__login">

                <label class="form__label" for="login">Login</label>
                <input id="login" type="login" name="login">

            </div>

            <div class="login-form__password">

                <label class="form__label" for="password">Password</label>
                <input id="password" type="password" name="password">

            </div>

            <button type="submit" class="form__submit btn-primary">Войти</button>

        </form>

    </main>

</body>
</html>