function obtenerEdad(fecha){
    let fechaBirthday = +new Date(fecha);
    resultado = (Date.now() - fechaBirthday) / anioMilisegundos;
    return resultado
}
