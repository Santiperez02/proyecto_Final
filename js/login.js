const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

//Validacion de campos

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if (nombre.value.length < 6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    if (!regexEmail.test (email.value)) {
        warnings += 'El email no es valido <br>'
        entrar = true
    }
    if (password.value.length < 8) {
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})


//aca dan
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

