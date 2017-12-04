<?php
include ("config.php");
session_start();
$user = $_SESSION["id"];
$query = "SELECT * FROM Messages WHERE recipient_ids LIKE '%$user%' ORDER BY date_sent DESC LIMIT 10";
$result = mysqli_query($conn,$query);
$table = "<tr>";
while($row = mysqli_fetch_assoc($result)){
    $sender = (int)$row["sender_id"];
    $user_query = "SELECT * FROM Users WHERE id = {$sender}";
    $user_result = mysqli_query($conn,$user_query);
    $user_row = mysqli_fetch_assoc($user_result);
    $table = $table."<td>".$user_row["username"]."</td><td class='subject'>".$row["subject"]."</td><td>".$row["date_sent"]."</td>";
    $table = $table."</tr>";
}
echo $table;
mysqli_close($conn);
?>

