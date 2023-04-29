<?php
    $sumSend = $_POST['sumSend'];
    $text = $_POST['text'];
	$to = "natalia.balura25@gmail.com"; 
	$from = $email;
	$subject = "Сума замовлення";

	$msg="
    Сума замовлення: $sumSend /n"
	mail($to, $subject, $msg, "From: $from ");

?>

