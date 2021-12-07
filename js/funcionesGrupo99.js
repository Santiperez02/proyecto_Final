const nombre_contact = document.getElementById("name_contact")
const apellido_contact = document.getElementById("surname_contact")
const email_contact = document.getElementById("email_contact")
const form_contact = document.getElementById("form_contact")
const parrafo_contact = document.getElementById("warnings_contact")

const nombre_form = document.getElementById("name_form")
const apellido_form = document.getElementById("surname_form")
const email_form = document.getElementById("email_form")
const password_form = document.getElementById("password_form")
const form_form = document.getElementById("form_form")
const parrafo_form = document.getElementById("warnings_form")
const birthday_form = document.getElementById("birthday_form")
const formulario_form = document.getElementById("form_form")
const anioMilisegundos = 31557600000

const nombre_login = document.getElementById("name_login")
const email_login = document.getElementById("email_login")
const password_login = document.getElementById("password_login")
const form_login = document.getElementById("form_login")
const parrafo_login = document.getElementById("warnings_form")


//Validacion de campos
if (form_contact){
    form.addEventListener("submit", e=> {
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        parrafo.innerHTML = ""
        if (nombre_contact.value.length < 2){
            alert('-El nombre tiene que tener entre 2 y 60 caracteres.')
            entrar = true
        }
        if (apellido_contact.value.length < 2){
            alert('-El apellido tiene que tener entre 2 y 60 caracteres.')
            entrar = true
        }
        if (!regexEmail.test (email_contact.value)) {
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
}


function obtenerEdad(fecha){
    let fechaBirthday = +new Date(fecha);
    resultado = (Date.now() - fechaBirthday) / anioMilisegundos;
    return resultado
}

//Validacion de campos
if (form_form){
    form_form.addEventListener("submit", e=> {
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let regexSoloLetras = /^[a-zA-Z]+$/
        parrafo_form.innerHTML = ""
    
        if (nombre_form.value.length < 2 || nombre_form.value.length >= 60){
            warnings += '-El nombre tiene que tener entre 2 y 60 caracteres. <br>'
            entrar = true
        }
    
        if (apellido_form.value.length < 2 || apellido_form.value.length >= 60){
            warnings += '-El apellido tiene que tener entre 2 y 60 caracteres. <br>'
            entrar = true
        }
    
        if (!regexEmail.test (email_form.value)) {
            warnings += '-El email no es valido <br>'
            entrar = true
        }
    
        if (!regexSoloLetras.test (nombre_form.value)) {
            warnings += '-Nombre solo puede contener letras <br>'
            entrar = true
        }
        
        if (!regexSoloLetras.test (apellido_form.value)) {
            warnings += '-Apellido solo puede contener letras <br>'
            entrar = true
        }
        
        if (password_form.value.length < 4) {
            warnings += '-La contraseña tiene que tener entre 4 y 16 caracteres. <br>'
            entrar = true
        }
    
        if (obtenerEdad(birthday_form.value) < 18) {
            warnings += '-Necesitas ser mayor de edad. <br>'
            entrar = true
        }
    
        if(entrar){
            parrafo_form.innerHTML = warnings
        }
        else {
           alert("Envio exitoso!");
           formulario_form.submit();
        }
    })
}



//Validacion de campos
if (form_login){
    form_login.addEventListener("submit", e=> {
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        parrafo_login.innerHTML = ""
        if (nombre_login.value.length < 6){
            warnings += 'El nombre no es valido <br>'
            entrar = true
        }
        if (!regexEmail.test (email_login.value)) {
            warnings += 'El email no es valido <br>'
            entrar = true
        }
        if (password_login.value.length < 8) {
            warnings += 'La contraseña no es valida <br>'
            entrar = true
        }
        if(entrar){
            parrafo_login.innerHTML = warnings
        }
    })
}

function change()
{
    var btn = document.getElementById("mybtn");
    btn.value = 'my value';
    btn.innerHTML = 'Mucho mejor!';
    btn.style.color = "white"
    btn.style.background = "#da425e";
    btn.style.padding = "25px 40px";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.marginTop = "55px";
    btn.style.marginLeft = "528px";
    btn.style.cursor = "pointer";
    btn.style.outline = "2px solid white"
}

function btnProgreso()
{
    let button = document.getElementById("button-form");
    button.value = "btn-login";
    button.innerHTML = "Cargando"
}

