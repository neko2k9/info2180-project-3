/*global $*/

$(document).ready(function() {
    let data= {
        text : "logout"
    };
    $("#logout").click(function(event){
        event.preventDefault();
         if(confirm("Are you sure you want to log out?")){
         $.post("/assets/php/logout.php",data,function(data,status,xhr){
            window.location.href = "/index.html";
        });
    
    }
});
});