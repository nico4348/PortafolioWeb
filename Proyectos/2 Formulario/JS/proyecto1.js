function enviar(){
    let primernombre = document.getElementById("fName").value;
    let segundonombre = document.getElementById("SName").value;
    let primerapellido = document.getElementById("fLastName").value;
    let segundoapellido = document.getElementById("SLastName").value;
    let edad = document.getElementById("fEdad").value;
    let fechanacimiento = document.getElementById("fDate").value;
    let telefono = document.getElementById("fPhoner").value;
    let email = document.getElementById("fEmail").value;
    let direccion = document.getElementById("fDireccion").value;
    alert("Bienvenido, " + primernombre + " " + segundonombre + " " + primerapellido + " " + segundoapellido + ", tu edad es: " + edad + ", tu edad es: " + fechanacimiento + telefono + email + direccion );
}