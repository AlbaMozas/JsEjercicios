//Declara 3 variables con los nombres y valores siguientes
// ``firstName = 'Jon'; lastName = 'Snow'; age = 24``; 
//Muestralos por consola de esta forma: Soy Jon Snow, Tengo 24 años y me gustan los lobos.

let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log(`Soy ${firstName} ${lastName}, Tengo ${age} años y me gusta los lobos`);


//SE PUEDE HACER DENTRO DE UNA SOLA VARIABLE//
let datos = {
    firstName: 'Jon',
    lastName:'Snow',
    age: 24,
}
console.log(`Soy ${datos.firstName} ${datos.lastName}, Tengo ${datos.age} años y me gusta los lobos`);
