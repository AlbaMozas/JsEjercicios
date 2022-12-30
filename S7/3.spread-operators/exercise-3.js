//Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos
//const pointsList = [32, 54, 21, 64, 75, 43];
//const pointsLis2 = [54,87,99,65,32];


const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let sumaPointList = [...pointsList,...pointsLis2];
//para que los una en el mismo array, hay que poner ... antes de las dos variables
//si no pasa esto, mete una array dentro del otro = [ 32, 54, 21, 64, 75, 43, [ 54, 87, 99, 65, 32 ] ]
console.log(sumaPointList);