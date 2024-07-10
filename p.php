<?php
$to = 'shedmikee@gmail.com';
$subject = 'Test Email';
$message = 'This is just a test-run Email.';
$senderEmail = 'sender@gmaol.com';
$senderName = 'Try Guessing';
$headers = 'From '. $senderName.'<`.$senderEmail.`> '."\r\n".'Reply-To: '.$senderEmail."\r\n".'X-Mailer:PHP/'.phpversion();

if (mail($to, $subject, $message, $header)) {
    echo 'Email successfully sent ✅';
} else {
    echo 'Failed to send Email ❌';
}

?>