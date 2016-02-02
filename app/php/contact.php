<?php
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];

$subject = $name;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From:' . $email. "\r\n";
$fullmessage = 'Отправлено через форму обратной связи на kryshtopa.com<br/>' . $message;

mail("mail@kryshtopa.com", $subject, $fullmessage, $headers);
?>
