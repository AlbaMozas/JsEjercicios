//Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo , usando spread operatos.

//const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const [r,a,ama,...all] = colors;

const notAllColors = [r,a,...all,'se puede añadir un nuevo color']
console.log(notAllColors);


