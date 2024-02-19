
// Ejercicio 1: Verificar el Nit
// Enunciado: Construya una expresión regular que permita validar en Nit de una empresa en Colombia.
// Nueve digitos.

function checkNit(){
    let nit = prompt('Ingrese el nit');
    let pattern = /^\d{9}$/;
    if(nit.match(pattern)){
        console.log('El nit es correcto');
    }
}


// Ejercicio 2: Verificar un código postal
// Enunciado: Crea una expresión regular que valide un código postal con el formato
// de cinco dígitos.

function checkPostal(){
    let nit = prompt('Ingrese el codigo postal');
    let pattern = /^\d{6}$/;
    if(nit.match(pattern)){
        console.log('El codigo postal es correcto');
    }
}


// Ejercicio 3: Verificar un formato de correo electrónico
// Enunciado: Crea una expresión regular que valide un formato básico de dirección de
// correo electrónico.

function validarCorreoElectronico() {
    let correo = prompt('Ingrese el correo electrónico');
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (correo.match(emailPattern)) {
        console.log('El correo electrónico es válido');
    } else {
        console.log('El correo electrónico no es válido');
    }
}

// Ejercicio 4: Verificar un número de teléfono
// Enunciado: Crea una expresión regular que valide un número de teléfono con el formato
// (XXX) XXX-XXXX.

function validarTelefono() {
    let telefono = prompt('Ingrese el número de teléfono');
    let telefonoPattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    if (telefono.match(telefonoPattern)) {
        console.log('El número de teléfono es válido');
    } else {
        console.log('El número de teléfono no es válido');
    }
}

// Ejercicio 5: Verificar una dirección URL
// Enunciado: Crea una expresión regular que valide una dirección URL básica.

function validarURL() {
    let url = prompt('Ingrese la dirección URL');
    let urlPattern = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/?([a-zA-Z0-9._%+-\/]*)$/;

    if (url.match(urlPattern)) {
        console.log('La URL es válida');
    } else {
        console.log('La URL no es válida');
    }
}

// Ejercicio 6: Validar un nombre de usuario
// Enunciado: Crea una expresión regular que valide un nombre de usuario. El nombre de
// usuario debe contener solo letras minúsculas y números, con longitud entre 3 y 10
// caracteres.

function validarNombreUsuario() {
    let username = prompt('Ingrese el nombre de usuario');
    let usernamePattern = /^[a-z0-9]{3,10}$/;

    if (username.match(usernamePattern)) {
        console.log('El nombre de usuario es válido');
    } else {
        console.log('El nombre de usuario no es válido');
    }
}

// Ejercicio 7: Validar una dirección IP
// Enunciado: Crea una expresión regular que valide una dirección IP en formato IPv4.

function validarDireccionIP() {
    let ip = prompt('Ingrese la dirección IP');
    let ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (ip.match(ipPattern)) {
        console.log('La dirección IP es válida');
    } else {
        console.log('La dirección IP no es válida');
    }
}

// Ejercicio 8: Validar un formato de fecha
// Enunciado: Crea una expresión regular que valide una fecha en formato "dd/mm/yyyy".

function validarFecha() {
    let fecha = prompt('Ingrese la fecha en formato dd/mm/yyyy');
    let fechaPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (fecha.match(fechaPattern)) {
        console.log('La fecha es válida');
    } else {
        console.log('La fecha no es válida');
    }
}

// Ejercicio 9: Validar una contraseña segura
// Enunciado: Crea una expresión regular que valide una contraseña que cumpla con los
// siguientes criterios:
// Al menos 8 caracteres de longitud.
// Al menos una letra mayúscula.
// Al menos una letra minúscula.
// Al menos un número.
// Puede contener caracteres especiales como !@#$%^&*()_+.

function validarContraseña() {
    let contraseña = prompt('Ingrese la contraseña');
    let contraseñaPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/;

    if (contraseña.match(contraseñaPattern)) {
        console.log('La contraseña es válida');
    } else {
        console.log('La contraseña no es válida');
    }
}
