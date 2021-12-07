const nombre = document.getElementById("name")
const apellido = document.getElementById("surname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const birthday = document.getElementById("birthday")
const formulario = document.getElementById("form")
const anioMilisegundos = 31557600000

function obtenerEdad(fecha){
    let fechaBirthday = +new Date(fecha);
    resultado = (Date.now() - fechaBirthday) / anioMilisegundos;
    return resultado
}

//Validacion de campos
form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexSoloLetras = /^[a-zA-Z]+$/
    parrafo.innerHTML = ""

    if (nombre.value.length < 2 && nombre.value.length >= 60){
        warnings += '-El nombre tiene que tener entre 2 y 60 caracteres. <br>'
        entrar = true
    }

    if (apellido.value.length < 2 && apellido.value.length >= 60){
        warnings += '-El apellido tiene que tener entre 2 y 60 caracteres. <br>'
        entrar = true
    }

    if (!regexEmail.test (email.value)) {
        warnings += '-El email no es valido <br>'
        entrar = true
    }

    if (!regexSoloLetras.test (nombre.value)) {
        warnings += '-Nombre solo puede contener letras <br>'
        entrar = true
    }
    
    if (!regexSoloLetras.test (apellido.value)) {
        warnings += '-Apellido solo puede contener letras <br>'
        entrar = true
    }
    
    if (password.value.length < 4) {
        warnings += '-La contraseña tiene que tener entre 4 y 16 caracteres. <br>'
        entrar = true
    }

    if (obtenerEdad(birthday.value) < 18) {
        warnings += '-Necesitas ser mayor de edad. <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else {
       alert("Envio exitoso!");
       formulario.submit();
    }
})

