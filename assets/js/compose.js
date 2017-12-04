/* global $ */

window.onload = function(){
    $("#message-form").submit(function(event){
        event.preventDefault();
        let rec = document.getElementById("recipients");
        let subj = document.getElementById("subject");
        let text = document.getElementById("message");
        let user_info = {
            recipient : rec.value,
            subject : subj.value,
            body : text.value
        };
        $.post("assets/php/compose.php",user_info,function(data,status,xhr){
            alert(data);
            window.location.href = "/mail.html";
        });
    });
};