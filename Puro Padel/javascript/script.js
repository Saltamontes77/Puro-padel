// function mtscuadrados (largo, ancho) {
//     let mts = largo * ancho;
//     console.log(mts + "m2");
// }

// mtscuadrados (230,26)
// mtscuadrados (34, 54)


// function area (pi,radio2) {
//     let area = pi * radio2;
//     console.log(area + "m2");
// }

// area (37,25)
// area (44,33)



// let refmytext = document.querySelector(#mytext);

// function mostrartexto() {
//     refmytext.innerhtml = soy el nuevo texto
// }

// const inputName = document.querySelector("#inp-nombre");
// const outputText = document.querySelector("#salida-saludo");
// // function saludar(){
// //     const saludoCompleto = "hola, me llamo Jarvis, un placer conocerte " + inputName.value;
// //     outputText.innerHTML = saludoCompleto;
// // }

// function saludar(){
//     if (inputName.value != ""){
//         const saludoCompleto = "hola, me llamo Jarvis, un placer conocerte " + inputName.value;
//         outputText.innerHTML = saludoCompleto;
//     } else {
//         outputText.innerHTML = "Por favor, ingresa tu nombre para empezar."
//     }
// }

const valores = [30, 45, 76, 8];

let mayor = valores[0];

for( let numero of valores) {
    if(numero > mayor){
        mayor = numero;
    }
}

console.log(mayor)




const valor = [76, 23, 101];

let menor = valor[0];

for( let numero of valor) {
    if(numero < menor){
        menor = numero;
    }
}

console.log(menor)



function espar (num) {
    return num % 2 ===  0
}

console.log(espar(3))
console.log(espar(6))
console.log(espar(46))