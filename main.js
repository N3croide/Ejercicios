
// Ejercicio 1: Verificar el Nit
// Enunciado: Construya una expresión regular que permita validar en Nit de una empresa en Colombia.
// Nueve digitos.

function checkNit(){
    let nit = prompt('Ingrese el nit')
    let pattern = /\d{9}/g
    if((nit.match(pattern)) && (nit.length == 9)){
        console.log('El nit es correcto')
    }
}


// Ejercicio 2: Verificar un código postal
// Enunciado: Crea una expresión regular que valide un código postal con el formato
// de cinco dígitos.

function checkNit(){
    let nit = prompt('Ingrese el codigo postal')
    let pattern = /\d{5}/g
    if((nit.match(pattern)) && (nit.length == 6)){
        console.log('El codigo postal es correcto')
    }
}


// Ejercicio 3: Verificar un formato de correo electrónico
// Enunciado: Crea una expresión regular que valide un formato básico de dirección de
// correo electrónico.



// Ejercicio 4: Verificar un número de teléfono
// Enunciado: Crea una expresión regular que valide un número de teléfono con el formato
// (XXX) XXX-XXXX.



// Ejercicio 5: Verificar una dirección URL
// Enunciado: Crea una expresión regular que valide una dirección URL básica.



// Ejercicio 6: Validar un nombre de usuario
// Enunciado: Crea una expresión regular que valide un nombre de usuario. El nombre de
// usuario debe contener solo letras minúsculas y números, con longitud entre 3 y 10
// caracteres.



// Ejercicio 7: Validar una dirección IP
// Enunciado: Crea una expresión regular que valide una dirección IP en formato IPv4.



// Ejercicio 8: Validar un formato de fecha
// Enunciado: Crea una expresión regular que valide una fecha en formato "dd/mm/yyyy".



// Ejercicio 9: Validar una contraseña segura
// Enunciado: Crea una expresión regular que valide una contraseña que cumpla con los
// siguientes criterios:

// Al menos 8 caracteres de longitud.
// Al menos una letra mayúscula.
// Al menos una letra minúscula.
// Al menos un número.
// Puede contener caracteres especiales como !@#$%^&*()_+.