window.onload = function(){
    var httpRequest = new XMLHttpRequest();
    var button = document.getElementsByClassName("btn");

    button[0].addEventListener("click",function(el){

        el.preventDefault();
        var url = "http://localhost:8080/superheroes.php";
        httpRequest.open('GET',url,false);
        httpRequest.send();
        httpRequest.onreadystatechange = doSomething();

    });

function doSomething() {

    if (httpRequest.readyState == 3){console.log("1");}
    console.log(httpRequest.readyState)
    console.log(httpRequest.status)
    if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
        var response = httpRequest.responseText;
        alert(response);
     } else {
        alert('There was a problem with the request.');
        }
    }console.log("4");   
}


