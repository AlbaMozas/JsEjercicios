//Dado el siguiente array, utiliza .filter() 
//para generar un nuevo array con los valores que sean par.
//const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


//para que sea par tiene que tener === no funciona sólo con %2
const newArray = ages.filter((age) => age %2 === 0);
console.log(newArray);



    