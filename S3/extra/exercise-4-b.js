//Basandote en el ejercicio anterior. 
//Crea un botón que elimine el último elemento de la lista.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for (let i = 0; i < countries.length; i++) {
    let newDivs$$ = document.createElement('div');
    document.body.appendChild(newDivs$$);

    let newH4$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    newDivs$$.appendChild(newH4$$);
    newDivs$$.appendChild(img$$);

    newH4$$.textContent = countries[i].title;
    img$$.src = countries[i].imgUrl;
}

//esta función es para recoger todos los div y poder eliminar el último:
const borrarUltimo = () => {
    const ultimo$$ = document.querySelectorAll('div')
    document.body.removeChild(ultimo$$[ultimo$$.length-1]);    
  }

//con buttonn.onclick eliminamos el último porqur lo enlazamos a la función:
const buttonn = document.querySelector('button');
buttonn.onclick = borrarUltimo;