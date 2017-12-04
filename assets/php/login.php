<?php
include("config.php");

$username = $_POST['form-username'];
$password = $_POST['form-password'];
$encrypt  = md5($password);

$query  = "SELECT * FROM Users WHERE username = '$username' AND password = '$encrypt'";
$user_query = mysqli_query($conn, $query);
$user_db    = mysqli_fetch_row($user_query);

if (count($user_db) > 0) {
    if ($username == "admin") {
        $message = array(
            "result" => "success",
            "id" => $username
        );
    } else {
        $message = array(
            "result" => "success",
            "id" => $username
        );
    }
    session_start();
    $_SESSION["id"] = $user_db[0];
} else {
    $message = array(
        "result" => "not found",
        "id" => $username
    );
}

json_encode($message);
print_r(json_encode($message));
mysqli_close($conn);

?>