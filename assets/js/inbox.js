/* global $ */

window.onload=function(){
    let table = document.getElementById("messages");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            let result = JSON.parse(request.responseText);
            for(let index = 0; index<result.length; index++){
                table.innerHTML+="<tr><td>"+result[index]["username"]+"</td><td class='message'>"+result[index]["subject"]+"</td><td>"+result[index]["date"]+"</td></tr>";
            }
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
        }
    };
    request.open("GET","assets/php/messages.php",true);
    request.send();
};