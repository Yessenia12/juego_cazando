let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX =0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
let puntaje=0;
const ALTO_GATO=50;
const ANCHO_GATO=35;
const ALTO_COMIDA=25;
const ANCHO_COMIDA=25;

function graficarRectangulo(color, x,y,ancho,alto){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}

function graficarGato(){
    graficarRectangulo("green",gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    graficarRectangulo("red",comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

function iniciarJuego(){
    // Adaptado al centro y esquinas de un canvas de 600x400
    gatoX = (600 - ANCHO_GATO) / 2;
    gatoY = (400 - ALTO_GATO) / 2;
    comidaX = 600 - ANCHO_COMIDA;
    comidaY = 400 - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}

// CORREGIDO: Limpia el tamaño real de tu canvas (600x400)
function limpiarCanva() {
    ctx.clearRect(0, 0, 600, 400);
}

function moverIzquierda() {
    if (gatoX > 0) {
        gatoX = gatoX - 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}

// CORREGIDO: Límite horizontal adaptado a 600
function moverDerecha(){
    if (gatoX + ANCHO_GATO < 600) {
        gatoX = gatoX + 10;
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}

function moverArriba(){
    if (gatoY > 0) {
        gatoY = gatoY - 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}

// CORREGIDO: Límite vertical adaptado a 400 (Evita que se vaya hacia abajo)
function moverAbajo(){
    if (gatoY + ALTO_GATO < 400) {
        gatoY = gatoY + 10; 
        limpiarCanva();
        graficarGato();
        graficarComida(); 
        detectarColision();
    }
}

function detectarColision() {
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
}

// CORREGIDO: La comida ahora se mantiene dentro de los límites de 600x400
function aparecerComida(){
    comidaX = generarAleatorio(0, 600 - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, 400 - ALTO_COMIDA); 
    
    limpiarCanva();
    graficarGato();
    graficarComida(); 
}
