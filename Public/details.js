var modales = document.getElementsByClassName("modalContainer")
var botones = document.getElementsByClassName("btnModal")
var body = document.body


for (var i = 0; i < botones.length; i++) {

    botones[i].onclick = function (event) {
    
        var modal = event.target.querySelector(".modalContainer")

        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";

        var span = event.target.querySelector(".close")
    
        span.onclick = function () {
    
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
    
        }
    }

  
}






