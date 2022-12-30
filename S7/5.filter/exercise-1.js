//Dado el siguiente array, utiliza .filter() 
//para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
//.filter:  si tiene una matriz, pero sólo queremos algunos de sus elementos.


//Arrow functions se puede poner age sin paréntesis porque sólo es una función
//const newArray = ages.filter(age => age > 18);
const newArray = ages.filter((age) => age > 18);
console.log(newArray);

//Probando con los menores de 18:
// const prueba = ages.filter((age) => age < 18);
// console.log(prueba);

//Otra manera de hacerlo con function sin =>
    // let newArray1 = ages.filter(function (age) {  
    //     return age > 18;
    // });

