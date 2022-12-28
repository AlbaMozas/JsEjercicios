//Basandote en el siguiente html, añade un evento 'focus'
// que ejecute un console.log con el valor del input.

//El evento focus se dispara cuando se activa el control o toma foco

const accion = (evento) => console.log(evento);
   
const action = document.querySelector("input");

action.addEventListener("focus", ()=> accion(action.value));