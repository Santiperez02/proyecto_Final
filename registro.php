<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="venom, Venom, Carnage, carnage, PS3, PS4, Consola, login, entrar, Inicio sesion">
    <meta name="description" content="Los mejores videojuegos estan aquí, no pierdas tu tiempo y consulta nuestro catalogo">
    <meta http-equiv="refresh" content="5;url=index.html" />
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="css/login/login.css">
    <link rel="icon" href="/img/Venom-ico.ico">
</head>
<body>   
    <header class="header-container">
        <div class="logo-header">
            <a href="index.html">
                <img src="img/logo_venom.png">
            </a>
        </div>
        
        <div class="menu">
            <ul>
                <li><a href="juegos.html" id="juegos">JUEGOS</a></li>
                <li><a href="contacto.html" id="venom">CONTACTO</a></li>
                <li><a href="https://www.dccomics.com/" target="_blank"><img src="/img/dc-logo.png" class="menu-img"></a></li>
                <li><a href="https://www.marvel.com" target="_blank"><img src="/img/marvel_logo.png" class="menu-img"></a></li>
                <li class="form"><a href="login.html" class="a-form">Iniciar Sesión</a></li>
            </ul>
        </div>
    </header>

    <div id="form" class="main-form" name="form">
        <div class="form">
            <div class="form-login">
                <h1>Tus Datos</h1>
                <div class="group-form">
                    <h1 class="name-value" id="name-value"><b>Tu nombre:</b><?php echo $_POST["name"]; ?></h1>
                    <hr>
                    <h1 class="name-value" id="name-value"><b>Tu apellido:</b><?php echo $_POST["surname"]; ?></h1>
                    <hr>
                    <h1 class="name-value" id="name-value"><b>Correo electronico:</b><?php echo $_POST["email"]; ?></h1>
                    <hr>
                    <h1 class="name-value" id="name-value"><b>Contraseña:</b><?php echo $_POST["password"]; ?></h1>
                    <hr>
                    <h1 class="name-value" id="name-value"><b>Fecha de nacimiento:</b><?php echo $_POST["birthday"]; ?></h1>
                    <hr>
                    <h1 class="name-value" id="name-value"><b>Provincia:</b><?php echo $_POST["province"]; ?></h1>
                    <hr>
                    <h1 class="name-value" id="name-value"><b>Pais:</b><?php echo $_POST["country"]; ?></h1>
                    <hr>
                </div>
            </div>
            
        </div>
    </form>
   <script src="/js/form.js"></script>
</body>
</html>