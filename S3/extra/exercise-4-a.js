//Dado el siguiente array de objetos. 
//Crea dinamicamente en el html una lista de div 
//que contenga un elemento h4 para el titulo 
//y otro elemento img para la imagen. 

//array dado
const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// let newDivs$$ = document.createElement('div');
// document.body.appendChild(newDivs$$);
//esto hay que meterlo dentro del bucle para que funcione,
//porque si no se mete todo en un sólo div y no varios como queremos

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

