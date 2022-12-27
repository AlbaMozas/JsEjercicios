//Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

//.push para añadir los elementos que queramos
console.log('El último de la lista:',rickAndMortyCharacters[rickAndMortyCharacters.length-1]);
//según lo que se ponga en -1 / -2 / -3 se accede a una posición diferente.