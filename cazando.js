let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
let gatoX =0;
let gatoY=0;
let comidaX=0;
let comidaY=0;
const ALTO_GATO=50;
const ANCHO_GATO=35;
const ALTO_COMIDA=25;
const ANCHO_COMIDA=25;


function graficarGato(){
    ctx.fillStyle="red";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}
function graficarComida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}
function iniciarJuego(){
    gatoX = (500 - ANCHO_GATO) / 2;
    gatoY = (500 - ALTO_GATO) / 2;
    comidaX = 500 - ANCHO_COMIDA;
    comidaY = 500 - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}