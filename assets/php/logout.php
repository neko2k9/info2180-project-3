<?php

session_start();

$session_end = $_POST["text"];

if($session_end === "logout"){
    session_destroy();
    echo "You have successfully signed out.";
}

?>