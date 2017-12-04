<?php
$host = getenv("IP");
$db = "CheapoMail";
$username = getenv("C9_USER");
$password = "";

//$conn = new PDO("mysql:host=$host;dbname=$db", $username, $password);

$conn = mysqli_connect($host,$username,$password,$db);

if($conn === false) {
    echo "Error : Failed to contact database";
} 
?>