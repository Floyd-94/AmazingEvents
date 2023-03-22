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


