window.onload = function(){
    var httpRequest = new XMLHttpRequest();
    var button = document.getElementsByClassName("btn");
    

    button[0].addEventListener("click",function(el){
        el.preventDefault();
        var url = "superheroes.php";
        var hero = document.getElementById("input").value;
        httpRequest.open('GET',url+"?q="+hero,false);
        httpRequest.send();
        httpRequest.onreadystatechange = getMsg();
        

    });

function getMsg() {
    console.log(httpRequest.status)
    if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
        var response = httpRequest.responseText;
        var space = document.getElementById("result");
        space.innerHTML=response;
     } 
    } 
}


