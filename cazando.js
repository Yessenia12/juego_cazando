let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX =0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
let puntaje=0;
let tiempo=10;
const ALTO_GATO=50;
const ANCHO_GATO=35;
const ALTO_COMIDA=25;
const ANCHO_COMIDA=25;

// TEMPORIZADOR
let temporizadorActivo = false; 
let controlTiempo;

function graficarRectangulo(color, x,y,ancho,alto){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}function graficarGato(){
    graficarRectangulo("green",gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}function graficarComida(){
    graficarRectangulo("red",comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}function iniciarJuego(){
    gatoX = (600 - ANCHO_GATO) / 2;
    gatoY = (400 - ALTO_GATO) / 2;
    // posicion de la comida aleatoria
    comidaX = generarAleatorio(0, 600 - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, 400 - ALTO_COMIDA);
    graficarGato();
    graficarComida();
}function limpiarCanva() {
    ctx.clearRect(0, 0, 600, 400);
}function iniciarTemporizador() {
    if (!temporizadorActivo) {
        controlTiempo = setInterval(restarTiempo, 1000); 
        temporizadorActivo = true;
    }
}function moverIzquierda() {
    if (gatoX > 0 && tiempo > 0 && puntaje < 6) { 
        iniciarTemporizador();     
        gatoX = gatoX - 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function moverDerecha(){
    if (gatoX + ANCHO_GATO < 600 && tiempo > 0 && puntaje < 6) {
        iniciarTemporizador();
        gatoX = gatoX + 10;
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function moverArriba(){
    if (gatoY > 0 && tiempo > 0 && puntaje < 6) {
        iniciarTemporizador();
        gatoY = gatoY - 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function moverAbajo(){
    if (gatoY + ALTO_GATO < 400 && tiempo > 0 && puntaje < 6) {
        iniciarTemporizador();
        gatoY = gatoY + 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA && 
        gatoX + ANCHO_GATO > comidaX && 
        gatoY < comidaY + ALTO_COMIDA && 
        gatoY + ALTO_GATO > comidaY
    ) {
        puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);
        
        if (puntaje === 6) {
            clearInterval(controlTiempo);
            temporizadorActivo = false;
            // CORRECCIÓN: Primero se redibuja para ver la colisión y luego va el alert
            alert("¡Felicidades, eres el ganador!");
            mostrarEnSpan("mensaje", "¡Ganaste el juego! Presiona REINICIAR.");
        } else {
            alert("¡Felicidades el GATO comio!");
            aparecerComida();
        }
    }
}function aparecerComida(){
    comidaX = generarAleatorio(0, 600 - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, 400 - ALTO_COMIDA); 
    
    limpiarCanva();
    graficarGato();
    graficarComida(); 
}function restarTiempo(){
   tiempo=tiempo-1;
   mostrarEnSpan("tiempo",tiempo);
    
   if (tiempo <= 0) {
       clearInterval(controlTiempo); 
       temporizadorActivo = false;    
       alert("Game Over");
       mostrarEnSpan("mensaje", "¡Tiempo agotado! Fin del juego. Presiona REINICIAR.");
   }
}function reiniciarJuego() {
    // DETENER EL INTERVALO DE TIEMPO
    clearInterval(controlTiempo);
    temporizadorActivo = false;
    tiempo = 10;
    puntaje = 0;
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("mensaje", ""); 
    limpiarCanva();
    iniciarJuego();
}
