//Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. 
//La función sum sumara dos parametros a y b y los retornará. 
//La función substract hará lo mismo pero restando 
//y la función father recibirá como parámetros a, b y una función callback (sum o substract).

//La función father deberá ejecutar la función que reciba como callback y 
//añadir el numero que retorne la función al array numersList.

//Ejecuta varias veces la función father y haz finalmente un console.log de numbersList


const numbersList = [];

function father(a,b,callback){
    numbersList.push(callback(a,b));
}

function sum(a,b){
    return(a+b);
}

function substract(a,b){
    return(a-b)
}

//ejecutar la función varias veces

father(4,7,sum)
father(5,3,sum)
father(4,7,substract)
father(10,5,substract)

console.log(numbersList);
