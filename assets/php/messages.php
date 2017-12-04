<?php
include ("config.php");
session_start();
$user = $_SESSION["id"];
$query = "SELECT * FROM Messages WHERE recipient_ids LIKE '%$user%'";
$result = mysqli_query($conn,$query);
$output = array();

while($row = mysqli_fetch_assoc($result)){
    $message_info = array();
    $sender = (int)$row["sender_id"];
    $user_query = "SELECT * FROM Users WHERE id = {$sender}";
    $user_result = mysqli_query($conn,$user_query);
    $user_row = mysqli_fetch_assoc($user_result);
    $message_info["message"]=$row["id"];
    $message_info["username"]=$user_row["username"];
    $message_info["subject"]=$row["subject"];
    $message_info["date"]=$row["date_sent"];
    $message_info["body"]=$row["body"];
    array_push($output,$message_info);
}

echo json_encode($output);
mysqli_close($conn);
?>