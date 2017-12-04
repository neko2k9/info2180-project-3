<?php
include ("config.php");
session_start();
$user = $_SESSION["id"];

$message_id = $_POST["message"];
$query = "SELECT * FROM Messages WHERE id = '$message_id'";

$result = mysqli_fetch_row(mysqli_query($conn,$query));
$current_date = date("Y/m/d");

/*
$query = "INSERT INTO Message_read (message_id, reader_id, date_read) VALUES ('$message_id', '$result[1]','$current_date')";

if(mysqli_query($conn,$query)){
    echo "Success";
}else{
    echo "Error";
}


$output = array();

while($row = mysqli_fetch_assoc($result)){
    $message_info = array();
    $sender = (int)$row["sender_id"];
    $user_query = "SELECT * FROM Users WHERE id = {$sender}";
    $user_result = mysqli_query($conn,$user_query);
    $user_row = mysqli_fetch_assoc($user_result);
    $message_info["message"]=$row["id"];
    array_push($output,$message_info);
}

echo json_encode($output);
mysqli_close($conn);
*/

?>