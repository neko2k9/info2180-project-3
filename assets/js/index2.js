/* global $*/
$(document).ready(function() {
	$("#login-form").submit(function(event) {
		event.preventDefault();
		if ($("#form-username") == '') {
			alert("Enter username ");
			$("#form-username").css("borderColor", "#19b9e7");
		} else if ($("#form-password") == '') {
			alert("Enter password ");
			$("#form-password").css("borderColor", "#19b9e7");
		} else {
			$.ajax({
				url: "/assets/php/login.php",
				type: "POST",
				data: $("#login-form").serialize(), 
				success: function(data){
					console.log("reach2");
					var result=JSON.parse(data);
					console.log(result);
					if (result.hasOwnProperty("result") && result.result=="success"){
						if (result.hasOwnProperty("id") && result.id=="admin")
						{
								window.location.href = "/adminmail.html";
						}
						else
						{
								window.location.href = "/mail.html";
						}
					}
					else if (result.hasOwnProperty("result") && result.result=="not found")
					{
						alert ("Check user name or password");
					}
				},
				error: function(data){
					console.log ("Error posting");
				}
			});
		}
	});
});