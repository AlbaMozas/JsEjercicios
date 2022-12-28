//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newp$$ = document.createElement("p");
newp$$.className = 'newP';
document.body.appendChild(newp$$);

const newtext$$ = document.createTextNode("Soy dinámico!");






