<?php
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];

$subject = $name;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n";

mail("followthewhite@yandex.ru", $subject, $message, $headers);
?>
