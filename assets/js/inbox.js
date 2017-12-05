/* global $ */

window.onload=function(){
    $.get("assets/php/messages.php",function(data,status){
        let result = JSON.parse(data);
        console.log(result);
        let table = document.getElementById("messages");
        let unread_messages = [];
        for(let index = 0; index<result.length;index++){
            $.post("assets/php/check.php",{text : result[index]["message"]},function(data,status,xhr){
                console.log(data);
                if(data === "found"){
                    unread_messages.push(result[index]["message"]);
                }
            });
        }
        for(let index = 0; index<result.length; index++){
            table.innerHTML+="<tr><td>"+result[index]["username"]+"</td><td class='subject'>"+result[index]["subject"]+"</td><td>"+result[index]["date"]+"</td></tr>";
        }
        let email = document.getElementsByClassName("subject");
        console.log(email);
        for(let index = 0;index<email.length;index++){
            email[index].addEventListener("click",function(){

            });
        }
    });
};

function search_arr(arr,target){
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === target){
            return true;
        }
    }
    return false;
}
//let result = JSON.parse(request.responseText);
/*
if(false){
    $.post("assets/php/read.php",result[index],function(data,status,xhr){
        if(data === "Success"){
            rows[index].className="read";
        }else{
            alert(data);
        }
    });
 }
 */