//Inserta dinamicamente en un html un div que contenga 6 p utilizando un for loop con javascript.


const newdiv$$ = document.createElement("div")
document.body.appendChild(newdiv$$);

for (let i = 0; i < 6; i++) {
    const newp$$ = document.createElement("p")
    //newp$$.className = 'newP'
    newdiv$$.appendChild(newp$$);   
}
