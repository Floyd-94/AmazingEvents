
// function imprimirConsola() { console.log("rata") }
// function saludar(nombre) { console.log("hola " + nombre) }

// function revisarTemperatura(temperatura) {
//     var fiebre = 38
//     var hipotermina = 35
//     if (temperatura >= fiebre) {
//         console.log("tenes fiebre")
//     } else if (temperatura <= hipotermina) {
//         console.log("tenes hiportemia")
//     } else {
//         console.log("estas bien")
//     }
// }

/*
function contarPalabras(frutas, fruta) {
    var counter = 0     for (var i = 0; i < frutas.length; i++) {
        if (frutas[i] === fruta) {
             counter = counter + 1
         }
     }
     console.log(counter)
 }
contarPalabras(["manzana", "banana", "uva", "banana", "banana"], "banana")
*/


// for (var i = 0; i <= 10; i++) {
//     alert(i)
// }

const para = document.querySelector("h1")

para.addEventListener("click", updateName);

function updateName() {
    let name = prompt("enter name");
    para.textContent = "Mi nombre es " + name;
}
