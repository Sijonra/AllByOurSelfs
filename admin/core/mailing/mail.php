<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language');
    $mail->IsHtml(true);


    $mail->setFrom('allByOurselfs', 'заказ Сайта');

    // Message

    $body = '<h1>Письмо от ABO</h1>'

    $body.='<p>'.$POST['name']'</p>';
    $body.='<p>'.$POST['email']'</p>';
    $body.='<p>'.$POST['title']'</p>';
    $body.='<p>'.$POST['text']'</p>';

    $mail->Body = $body;

    if(!email->send()){
        $message = 'Ошибка'ж
    }
    else{
        $message = ['message' => $message];
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>