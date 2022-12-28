//Dado el siguiente html y javascript. 
//Utiliza el array para crear dinamicamente una lista ul > li 
//de elementos en el div de html con el atributo data-function="printHere".

//aray dado
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let df$$ = document.querySelector('[data-function = "printHere"]');

let newUl$$ = document.createElement('ul');
df$$.appendChild(newUl$$);

for (let i = 0; i < cars.length; i++) {
     let newsLi$$ = document.createElement('li');
     newUl$$.appendChild(newsLi$$);
     newsLi$$.textContent = cars[i];
    
}