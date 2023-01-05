//Dado el siguiente javascript y html. 
//Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api 
//cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

//const baseUrl = 'https://api.nationalize.io?name=';


const baseUrl = 'https://api.nationalize.io?name=';

//variables para seleccionar el imput y el botón del html
const myInput = document.querySelector('input');
const myButton = document.querySelector('button');

const clickOnTheButton = () => { 
    fetch(baseUrl + myInput.value)
    .then((response) => {return response.json()})
    .then((myJson) => {console.log(myJson)})
};

myButton.onclick = () => {clickOnTheButton()};