<?php
include ("config.php");
session_start();

$check = (int)$_GET["text"];
$query = "SELECT * FROM Message_read WHERE reader_id = '$check";

if(mysqli_query($conn,$query) == false){
    echo "found";
}else{
    echo "not found";
}
?>