const nombre = document.getElementById("name")
const apellido = document.getElementById("surname")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

//Validacion de campos

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 2){
        alert('-El nombre tiene que tener entre 2 y 60 caracteres.')
        entrar = true
    }
    if (apellido.value.length < 2){
        alert('-El apellido tiene que tener entre 2 y 60 caracteres.')
        entrar = true
    }
    if (!regexEmail.test (email.value)) {
        alert('-El email no es valido')
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }

    else {
       alert("Envio exitoso!");
    }
})