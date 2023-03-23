const eventos = dataAmazing.eventos

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