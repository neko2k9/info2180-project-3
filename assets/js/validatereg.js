/*global $*/

window.onload=function(){
	let submit=document.getElementById("signup");
	submit.addEventListener("click", function(event){
		event.preventDefault();
		let fname=document.getElementById("form-first");
		let lname=document.getElementById("form-last");
		let uname=document.getElementById("form-usern");
		let passw=document.getElementById("form-passw");
		let passw2=document.getElementById("form-passw2");
		let passf=false,passl=false,passu=false,pass=false;
		
		if (fname.value=="")
		{
			fname.style.borderColor="#b2497d";
			passf=false;
		}
		else if (!/^[a-zA-Z]+$/.test(fname.value))
		{
			fname.style.borderColor="#19b9e7";
			alert("Only letters in the first name");
			passf=false;
		}
		else{
			fname.style.borderColor="";
			passf=true;
		}
		
		if (lname.value=="")
		{
			lname.style.borderColor="#b2497d";
			passl=false;
		}
		else if (!/^[a-zA-Z]+$/.test(lname.value))
		{
			lname.style.borderColor="#19b9e7";
			alert("Only letters in the last name");
			passl=false;
		}
		else{
			lname.style.borderColor="";
			passl=true;
		}
		
		if (uname.value=="")
		{
			uname.style.borderColor="#b2497d";
			passu=false;
		}
		else{
			uname.style.borderColor="";
			passu=true;
		}
		
		if (passw.value=="" || passw2.value=="")
		{
			passw.style.borderColor="#b2497d";
			passw2.style.borderColor="#b2497d";
			pass=false;
		}
		else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(passw.value))
		{
			passw.style.borderColor="#b2497d";
			pass=false;			
			alert("Password must be at least 8 characters with 1 number,1 upper case and 1 lowercase");
		}
		
		else if(passw.value!=passw2.value)
		{	
			passw.style.borderColor="#b2497d";
			passw2.style.borderColor="#b2497d";
			pass=false;
			alert("passwords did not match");				
		}
		else{
			passw.style.borderColor="";
			passw2.style.borderColor="";
			pass=true;
		}
		if (passf==true && passl==true && passu==true && pass==true)
		{
			//Ajax goes here
			$.ajax({
				url: "/assets/php/registeruser.php",
				type: "POST",
				data: $("#register-form").serialize(), 
				success: function(data){
					console.log("reach2");
					var result=JSON.parse(data);
					if (result.hasOwnProperty("id") && result.id=="password")
					{	
						if (result.id=="Password too short")
						{
							$("#word").html("<h3>Password was too short<h3>");
						}
						else if (result.id=="Password must be at least 8 characters with 1 number,1 upper case and 1 lowercase")
						{
							$("#word").html("<h3>Password not correct format<h3>");
						}
						else if (result.id=="Passwords dont match")
						{
							$("#word").html("<h3>Password do not match<h3>");
						}
					}
					if (result.hasOwnProperty("result") && result.result=="User entered"){
						$("#word").html("<h3>User added<h3>");
					}
					else if (result.hasOwnProperty("result") && result.result=="Could not add user")
					{
						$("#word").html("<h3>Error adding using<h3>");
					}
				},
				error: function(data){
					console.log ("Error posting");
				}
			});
		}
	});
};
