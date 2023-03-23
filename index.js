const fechaBase = dataAmazing.fechaActual
const eventos = dataAmazing.eventos
const pastEvents = []
const upcomingEvents = []

for (var i = 0; i < eventos.length; i++) {

    if (eventos[i].date > fechaBase) {
        upcomingEvents.push(eventos[i])
    } else {
        pastEvents.push(eventos[i])
    }
}

console.log(fechaBase)
console.log(eventos)
console.log(upcomingEvents)
console.log(pastEvents)


var buttonNav = document.getElementsByClassName("navlink")

for (var i = 0; i < buttonNav.length; i++) {

    const element = buttonNav[i]

    element.addEventListener("click", function (e) {
        imprimir(e.target.id)
    })
}

function imprimir(id) {//para saber que funciona
    
    switch (id) {
        case "Upcoming-Events":
            display(upcomingEvents)
            break;
        case "Past-Events":
            display(pastEvents)
            break;
        default:
            display(eventos)
    }
}

function display(array) {
    var html = ""
    for (var i = 0; i < array.length; i++) {
        html += ` 
        <div id="1">
                <img class="imagen" src="./Recursos Amazing Events/${array[i].image}" alt="${array[i].name}">
                <h2>${array[i].name}</h2>
                <p>${array[i].description}</p>
                <div class="preciodiv">
                <h3>Total: $${array[i].price}</h3>
                <a href="./details.html?id=${array[i].id}">Ver más</a>
                </div>
        </div>` // estas comillas hacen un string dinamico, se hacen con Altr Gr comilla

        console.log(html)
    }

    document.getElementById("tarjetas").innerHTML = html
}

imprimir("Home")