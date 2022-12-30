//En base al siguiente javascript, usa destructuring 
//para crear 2 variables igualandolo a la función e imprimiendolo por consola.

//const animalFunction = () => {return {name: 'Bengal Tiger', race: 'Tiger'}};


const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

//las dos variables de name y race
let {name, race} = animalFunction();

console.log(name, race); 
// console.log(race); 


