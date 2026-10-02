function generarAleatorio(min, max) {
   let random = Math.random();
   // Sumamos 1 para que el valor máximo también pueda salir en el sorteo
   let numero = random * (max - min + 1); 
   // Redondeamos hacia abajo para que el rango empiece exactamente en 'min' (0)
   let numeroEntero = Math.floor(numero); 
   numeroEntero = numeroEntero + min;
   return numeroEntero;
}
function mostrarEnSpan(idSpan,valor){
   let componente=document.getElementById(idSpan);
   componente.textContent=valor;
}