
//seleccionamos los divs de la clase ".fn-insert-here"
let selectDiv$$ = document.querySelectorAll(".fn-insert-here");

for (const div$$ of selectDiv$$) {
    let insertp$$ = document.createElement('p');
    insertp$$.textContent = 'Voy dentro!';
    div$$.appendChild(insertp$$);
}


// for (let i = 0; i < selectDiv$$.length; i++) {
//     let insertp$$ = document.createElement('p');
//     insertp$$.textContent = 'Voy dentro!';
//     selectDiv$$[i].appendChild(insertp$$);
// }


