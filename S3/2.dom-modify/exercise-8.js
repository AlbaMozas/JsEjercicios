



let newP$$ = document.createElement('p');
newP$$.textContent = 'Voy en medio!';

const segundoDiv$$ = document.querySelectorAll('div');
document.body.insertBefore(newP$$, segundoDiv$$[1]);

