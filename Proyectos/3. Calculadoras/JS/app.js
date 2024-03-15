function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado
}

function potencial(base,exponente){
    return Math.pow(base,exponente);
}
console.log(potencial(2,3));

function raiz(base){
    return Math.sqrt(base);
}
console.log(raiz(25));

function absoluto(base){
    return Math.abs(base)
}

console.log(absoluto(-30));

function circunferencia(radio){
    return 2 * Math.PI * radio;
}

console.log(circunferencia(5));

function calcularLitros(){
    let elementoKm = document.getElementById("textoKm")
    let textoKm = elementoKm.value
    let canKm = Number(textoKm)
    let cantLitros= Math.ceil(canKm/8.8)
    let resultado = document.getElementById("textoResultado")
    resultado.textContent = "Carga "+cantLitros+" litros de combustible"
}

function redondear(a){
    return Math.round(a);
}

console.log(redondear(circunferencia(51)))
console.log(redondear(15/9))

function redondear_abajo(a){
    return Math.floor(a);
}

console.log(redondear(circunferencia(51)))
console.log(redondear_abajo(15/9))

function redondear_arriba(a){
    return Math.ceil(a);
}

console.log(redondear_arriba(15/9))

function crearAleatorio(){
    let num1 = Number(document.getElementById("Maximo").value)
    let num2 = Number(document.getElementById("Minimo").value)
    let random = document.getElementById("textoAleatorio2")
    console.log(num1 + ' ' + num2)
    resultado = Math.round(Math.random()*(num1-num2)+num2)
    textoAleatorio2.textContent = resultado
}

function calculaSuma(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = num1 + num2
    mostrarResultado(num1+num2)

}

function calculaResta(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = num1 - num2
    mostrarResultado(num1 - num2)
}

function calcularMulti(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = num1 * num2
    mostrarResultado(num1 * num2)
}

function calcularDividir(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = num1 / num2
    mostrarResultado(num1 / num2)
}

function calcularPotencia(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = Math.pow(num1,num2)
    mostrarResultado(Math.pow(num1,num2))
}

function calcularRaiz(){
    let num1 = Number(document.getElementById("numero1").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = Math.sqrt(num1)
    mostrarResultado(Math.sqrt(num1))
}

function calcularAbsoluto(){
    let num1 = Number(document.getElementById("numero1").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = Math.abs(num1)
    mostrarResultado(Math.abs(num1))
}


function calcularAleatorio(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let random = document.getElementById("resultado")
    resul = Math.round(Math.random()*(num1-num2)+num2)
    resultado.textContent = resul
    mostrarResultado(resul)
}

function calcularRedondeado(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = Math.round(num1/num2)
    mostrarResultado(Math.round(num1/num2))
}

function calcularArriba(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = Math.ceil(num1/num2)
    mostrarResultado(Math.ceil(num1/num2))
}

function calcularAbajo(){
    let num1 = Number(document.getElementById("numero1").value)
    let num2 = Number(document.getElementById("numero2").value)
    let resultado = document.getElementById("resultado")
    resultado.textContent = Math.floor(num1/num2)
    mostrarResultado(Math.floor(num1/num2))
}