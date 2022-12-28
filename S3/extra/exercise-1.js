//Basandote en el array siguiente, crea una lista ul > li dinámicamente 
//en el html que imprima cada uno de los paises.


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const newUl$$ = document.createElement('ul');
document.body.appendChild(newUl$$);

for (let i = 0; i < countries.length; i++) {
    let newsLi$$ = document.createElement('li');
    newUl$$.appendChild(newsLi$$);
    newsLi$$.textContent = countries[i];   
}
