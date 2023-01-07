//En base al ejercicio anterior, 
//crea un botón con el texto 'X' para cada uno de los p que hayas insertado 
//y que si el usuario hace click en este botón eliminemos el parrafo asociado.


const baseUrl = 'https://api.nationalize.io?name=';

const myInput = document.querySelector('input');
const myButton = document.querySelector('button');

const myPrint = (myJson) => {
    let name = myJson.name;
    let frase = `El nombre ${name} tiene un `;
    const myDiv$$ = document.createElement('div');
    myDiv$$.textContent = frase;
    document.querySelector('body').appendChild(myDiv$$);

    
    for (let i = 0; i < myJson.country.length; i++) {
        let country = myJson.country[i].country_id;
        // variable que recorre probability *100 = % 
        let probability = (myJson.country[i].probability*100).toFixed(1);
        let fraseP = `${probability} porciento de ser de ${country} `;

        const myDiv$$ = document.createElement('div');
        const myP$$ = document.createElement('p');
        const myButton$$ = document.createElement('button');

        myP$$.textContent = fraseP;

        myButton$$.textContent = 'X'; 
        myButton$$.onclick = () => myDiv$$.remove();

        myDiv$$.appendChild(myP$$);
        myDiv$$.className = 'myDiv';
        //.myDiv clase declarada en style/html
        
        myDiv$$.appendChild(myButton$$);
        document.querySelector('body').appendChild(myDiv$$);
        
    };
    
};

const clickOnTheButton = () => { 
    fetch(baseUrl + myInput.value)
    .then((response) => {return response.json()})
    .then((myJson) => {
        myPrint(myJson); 
        return myJson;
    })
    .then((myJson) => {console.log(myJson)})
    //pintar con myJson 
    
};

myButton.onclick = () => {clickOnTheButton()};