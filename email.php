<?php 

 $name = $_POST['name'];
 $email = $_POST['email'];
 $message = $_POST['message'];
 $to ="shedmikee@gmail.com";
 $subject = $_POST['subject'];
 $txt ="Name= ".$name."\r\n Email= ".%email."\r\n Message= ".%message;
 $headers = " From: noreply@test.com";
 if ($email != NULL){
     mail($to, $subject, $txt, $headers);
     header("Location: success.html");
 }
 
?>