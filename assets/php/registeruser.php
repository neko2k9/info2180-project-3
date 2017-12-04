<?php

include("config.php");
$firstname = addslashes($_POST['form-first']);
$lastname  = addslashes($_POST['form-last']);
$username  = addslashes($_POST['form-usern']);
$password  = $_POST['form-passw'];
$password2 = $_POST['form-passw2'];

if ($password != "" && strlen($password) < 8) {
     $message = array(
            "id"=> "password",
            "result" => "Password too short"
        );
}
else if(!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/',$password))
{
    $message = array(
            "id" => "password",
            "result" => "Password must be at least 8 characters with 1 number,1 upper case and 1 lowercase"
        );
}
else if($password!=$password2){
	$message = array(
            "id" => "password",
            "result" => "Passwords dont match"
        );
}
else {
	$encrypted_password = md5($password);
    $query_string = "INSERT INTO Users (firstname, lastname, username, password)  VALUES ('$firstname', '$lastname', '$username', '$encrypted_password')";
    if ($conn->query($query_string) === TRUE) {
        $message = array(
            "result" => "User entered"
        );
    } else {
        $message = array(
            "result" => "Could not add user"
        );
    }
}
json_encode($message);
print_r(json_encode($message));
mysqli_close($conn);
?>