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

// VARIABLES NUEVAS PARA EL CONTROL DEL TEMPORIZADOR
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
    comidaX = 600 - ANCHO_COMIDA;
    comidaY = 400 - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}function limpiarCanva() {
    ctx.clearRect(0, 0, 600, 400);
}

// FUNCIÓN NUEVA PARA ENCENDER EL SETINTERVAL UNA SOLA VEZ
function iniciarTemporizador() {
    if (!temporizadorActivo) {
        controlTiempo = setInterval(restarTiempo, 1000); // Llama a restarTiempo cada 1 segundo (1000ms)
        temporizadorActivo = true;
    }
}

function moverIzquierda() {
    if (gatoX > 0 && tiempo > 0) { // Validación: Solo se mueve si queda tiempo
        iniciarTemporizador();     // Intenta encender el reloj
        gatoX = gatoX - 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function moverDerecha(){
    if (gatoX + ANCHO_GATO < 600 && tiempo > 0) {
        iniciarTemporizador();
        gatoX = gatoX + 10;
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function moverArriba(){
    if (gatoY > 0 && tiempo > 0) {
        iniciarTemporizador();
        gatoY = gatoY - 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}function moverAbajo(){
    if (gatoY + ALTO_GATO < 400 && tiempo > 0) {
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
        alert("¡Felicidades el GATO comio!");
        puntaje = puntaje + 1;
        mostrarEnSpan("puntos", puntaje);
        aparecerComida();
    }
}function aparecerComida(){
    comidaX = generarAleatorio(0, 600 - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, 400 - ALTO_COMIDA); 
    
    limpiarCanva();
    graficarGato();
    graficarComida(); 
}

// TU FUNCIÓN ACTUALIZADA PARA DETENER EL JUEGO AL LLEGAR A 0
function restarTiempo(){
   tiempo=tiempo-1;
   mostrarEnSpan("tiempo",tiempo);
    
   if (tiempo <= 0) {
       clearInterval(controlTiempo); // Apaga el temporizador por completo
       temporizadorActivo = false;    // Permite que se pueda reactivar en un futuro reinicio
      
   }
}
