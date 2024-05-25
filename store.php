<?php
$myFile = fopen("location.txt", "w");
$txt = "Lat: ".$_GET["lat"]."\nLong: ".$_GET["long"]."\nUser Agent: ".$_GET["uAgent"]."\nIP: ".$_SERVER["REMOTE_ADDR"];
fwrite($myFile, $txt);
fclose($myFile);

?>