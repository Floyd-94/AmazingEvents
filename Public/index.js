const fechaBase = dataAmazing.fechaActual //dataAmazing objeto
const eventos = dataAmazing.eventos //objeto
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

/*
var buttonNav = document.getElementsByClassName("navlink") //document ya existe como variable en js

for (var i = 0; i < buttonNav.length; i++) {

    const element = buttonNav[i]
//addEventListener escuchar la acción realizada por el usuario
    element.addEventListener("click", function (e) {  //(e)se va a referir a un evento que lo pone el navegador , como callback.
        imprimir(e.target.id)
        cambiarTitulo(e.target.text)
    })
}
*/

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
                <button id="btnModal">Ver más
                    <div id="myModal" class="modalContainer">
                       <div class="modal-content">
                       <span class="close"><i class="fa-solid fa-xmark"></i></span>
                         <img class="img" src="./Recursos Amazing Events/${array[i].image}" alt="${array[i].name}">
                         <h2>${array[i].name}</h2>
                         
                             <p>Fecha: ${array[i].date}</p>
                             <p>${array[i].description}</p>
                             <p class:"categoria">${array[i].category}</p>
                             <p>Ubicación: ${array[i].place}</p>
                             <p>Capacidad: ${array[i].capacity}</p>
                             <p>Asistencia: ${array[i].capassistanceacity}</p>
                        
                         <h3>Total: $${array[i].price}</h3>
                        </div>
                    </div>
                </button> 
            </div>
        </div>` // estas comillas hacen un string dinamico, se hacen con Altr Gr comilla
    }

    document.getElementById("tarjetas").innerHTML = html
}






//imprimir("Home")

/* hacer funcion cambiar titulo que tenga un parametro "titulo", 
cuando se llame esa funcion con un string como valor del parametro  "titulo"
La funsion va a modificar el texto del elemento html con el valor de string
*/
/*
function cambiarTitulo(titulo) { 
    document.getElementById("pagina-titulo").innerHTML = titulo
}


antes del modal



 <div id="1">
                <img class="imagen" src="./Recursos Amazing Events/${array[i].image}" alt="${array[i].name}">
                <h2>${array[i].name}</h2>
                <p>${array[i].description}</p>
                <div class="preciodiv">
                <h3>Total: $${array[i].price}</h3>
                <a href="./details.html?id=${array[i].id}">Ver más</a>
                </div>
        </div>` // estas comillas hacen un string dinamico, se hacen con Altr Gr comilla

*/




