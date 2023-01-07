//En base al ejercicio anterior. 
//Crea dinamicamente un elemento <p> por cada petición a la api que diga...
//'El nombre X tiene un Y porciento de ser de Z' etc etc.

//EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

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
        let probability = (myJson.country[i].probability*100).toFixed(1);
        let fraseP = `${probability} porciento de ser de ${country} `;
        // if(i !== myJson.country.length-1){
        //     frase = frase+ ` y un `;
        // }
        const myP$$ = document.createElement('p');
        myP$$.textContent = fraseP;
        document.querySelector('body').appendChild(myP$$);
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