function mostrarTodos(opacidad){
    var juegos = document.querySelectorAll(".juego");
    juegos.forEach(juego => {
        juego.style.opacity=opacidad;
    });
}
function mostrar(categoria){
    mostrarTodos("0.2");
    var juegos = document.querySelectorAll("."+categoria);
    juegos.forEach(juego => {
        juego.style.opacity="1";
    });
}
