//Basandote en el ejercicio anterior. 
//Crea un botón para cada uno de los elementos 
//de las listas que elimine ese mismo elemento del html.

const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

//función por encima del bucle para que funcione
const borrarUno = (i) => {
    console.log('borrar', i);
    console.log(event.target); //esto es para que se vea por consola el boton que se borra
    //const uno$$ = document.querySelectorAll('div')
    const uno$$ = document.getElementById(i)
    document.body.removeChild(uno$$);    
  };

for (let i = 0; i < countries.length; i++) {
    let newDivs$$ = document.createElement('div');
    newDivs$$.id = i;
    document.body.appendChild(newDivs$$);

    let newH4$$ = document.createElement('h4');
    let img$$ = document.createElement('img');
    let theButton$$ = document.createElement('button');
    theButton$$.textContent = 'delete element';

    //cada boton llama a la función (mirar event.target para hacerlo difernte)
    //los obtienen los eventos del padre 
    theButton$$.onclick = () => borrarUno(i);

    newDivs$$.appendChild(newH4$$);
    newDivs$$.appendChild(img$$);
    newDivs$$.appendChild(theButton$$);

    newH4$$.textContent = countries[i].title;
    img$$.src = countries[i].imgUrl;
};
