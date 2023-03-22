const fechaBase = dataAmazing.fechaActual
const eventos = dataAmazing.eventos
const upcomingEvents = []

for (var i = 0; i < eventos.length; i++) {

    if (eventos[i].date > fechaBase) {
        upcomingEvents.push(eventos[i])
    }
}

console.log(fechaBase)
console.log(eventos)
console.log(upcomingEvents)

var botonPastEvents = document.getElementById ("1";"2").style.display="none"