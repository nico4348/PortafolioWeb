let esMayorDeEdada = true
esMayorEdad = 4 < 16

console.log(esMayorDeEdada)
console.log(esMayorEdad);

let bool = Boolean()
console.log(bool);

bool = Boolean(" ")
console.log(bool);

bool = Boolean("Andres")
console.log(bool);

numero = 1 + true

console.log(numero);

palabra = 'palabra '+ false
console.log(palabra);

dato = 1 == 1
console.log(dato);

dato = 'A'=='A'
console.log(dato);

dato = 'Andres'>'Carlos'
console.log(dato);

dato = 'A'!='B'
console.log(dato);

function calcular(){
    let elementoRespuesta1 = document.getElementById("respuesta1")
    let elementoRespuesta2 = document.getElementById("respuesta2")
    let elementoRespuesta3 = document.getElementById("respuesta3")
    let textoEdad = Number(document.getElementById("textoEdad").value)
    let puedeBeber = textoEdad > 18
    elementoRespuesta1.textContent = puedeBeber
    let puedeIngresar = textoEdad >=18 && textoEdad <= 30
    elementoRespuesta2.textContent = puedeIngresar
    let entradaGratis = textoEdad == 20 || textoEdad == 25
    elementoRespuesta3.textContent = entradaGratis
}

function evaluarCompra(){
    let precio = document.getElementById("textoPrecio").value
    let respuesta = document.getElementById("desicion")
    if(precio < 5000){
        respuesta.textContent= "Comprar dos"
    }else{
        respuesta.textContent= "No comprar"
    }
}

function evaluarCompra1(){
    let precio = document.getElementById("textoPrecio1").value
    let respuesta = document.getElementById("desicion1")
    if(precio < 5000){
        respuesta.textContent= "Comprar dos"
    }else{
        if(precio < 8000){
            respuesta.textContent= "Comprar una"
        }
        else
            respuesta.textContent= "No comprar"
    }
}

function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio2")
    let elementoFruta = document.getElementById("numeroFruta")
    let fruta = elementoFruta.value
    switch(fruta){
        case "1":
            elementoRespuesta.textContent = "El precio de la fruta es 3000"
            break
        case "2":
            elementoRespuesta.textContent = "El precio de la fruta es 4000"
            break
        case "3":
            elementoRespuesta.textContent = "El precio de la fruta es 5000"
            break
        case "4":
            elementoRespuesta.textContent = "El precio de la fruta es 6000"
            break
        case "5":
            elementoRespuesta.textContent = "El precio de la fruta es 7000"
            break
        case "6":
            elementoRespuesta.textContent = "El precio de la fruta es 8000"
            break
        default:
            elementoRespuesta.textContent = "No tengo esa fruta"
    }
}