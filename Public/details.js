/*const eventos = dataAmazing.eventos

var id = location.search.split("?id=").filter(Number)

var selectcId = id[0]

const detailsEvents = []

for (var i = 0; i < eventos.length; i++) {

    if (eventos[i].id == selectcId) {
        detailsEvents.push(eventos[i])
    }
}

console.log(detailsEvents[0])

var texto = document.getElementById("prueba")

texto.innerHTML ()= html
    `
nombre del evento:${detailsEvents[0].name}
`
*/


if(document.getElementById("btnModal")){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}