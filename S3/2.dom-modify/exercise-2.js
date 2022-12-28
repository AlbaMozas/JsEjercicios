//Inserta dinamicamente en un html un div
// que contenga una p con javascript.

const newdiv$$ = document.createElement("div");
const newp$$ = document.createElement("p");

newdiv$$.className = 'div1';
newp$$.className = 'p1';

document.body.appendChild(newdiv$$);
newdiv$$.appendChild(newp$$);

