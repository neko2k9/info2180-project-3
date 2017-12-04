window.onload=function(){
    let table = document.getElementById("messages");
    let request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            table.innerHTML+= request.responseText;
        }
    };
    request.open("GET","assets/php/homescreen.php",true);
    request.send();
};