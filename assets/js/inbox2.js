/* global $ */
window.onload = function(){
    let rows = document.getElementsByClassName("message");
    let message = document.getElementById("result");
    let result = null;
    $.get("assets/php/messages.php",null,function(data,status){
        result = JSON.parse(data);
        console.log(result);
    });
    for( let index = 0; index<rows.length; index++){
        rows[index].addEventListener("click",function(){
            message.innerHTML ="<p>"+result[index]["body"]+"<p>";
            message.className = "box";
            console.log(result[index]["message"]);
            $.get("assets/php/check.php?",{text : result[index]["message"]},function(data,status){
                if(data === "found"){
                    rows[index].className = "read";
                }else{
                    if (data === "not found"){
                        rows[index].className = "unread";
                        }
                    }
            });
        });
    }
};