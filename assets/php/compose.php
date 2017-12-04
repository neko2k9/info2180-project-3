<?php

include ("config.php");

session_start();

$user_id = $_SESSION["id"];
$subject = $_POST["subject"];
$recipients = explode(",",$_POST["recipient"]);
$body = $_POST["body"];
$date_sent = date("Y-m-d H:i:s");
$recipient_ids="";
for ($index = 0; $index < count($recipients);$index++){
    $value = $recipients[$index];
    $query = "SELECT id FROM Users WHERE username = '$value'";
    $result = mysqli_fetch_row(mysqli_query($conn,$query));
    if($index == count($recipients)-1){
        $recipient_ids=$recipient_ids.$result[0];
    }else{
        $recipient_ids=$recipient_ids.$result[0].",";
    }
}

$sql = "INSERT INTO Messages (recipient_ids, sender_id, subject, body, date_sent) VALUES ('$recipient_ids', '$user_id', '$subject', '$body', '$date_sent')";
if(mysqli_query($conn,$sql)){
    echo "Message successfuly sent";
}else{
    echo "Error : Message not sent";
};

mysqli_close($conn);
?>