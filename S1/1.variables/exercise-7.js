//Dado el siguiente javascript, actualiza el valor de la variable ``globalBasePrice``
// a 25000 y actualiza la propiedad ``finalPrice`` de todos los coches con el valor 
//de su propiedad ``basePrice`` más el valor de la variable ``globalBasePrice``.

// let globalBasePrice = 10000;
// const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
// const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};


let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car1);
console.log(car2);

//Precio final actualizado de los dos coches juntos, forma de hacerlo//
console.log('Precio de los dos coches', car1.finalPrice + car2.finalPrice);

//El modelo Chevrolet Corbina está en oferta y le restan el basePrice//
car2.finalPrice = car2.finalPrice - car2.basePrice;
//car2.basePrice = 0
//console.log(`Nuevo precio Chevrolet Corbina en oferta ${car2.finalPrice} ¡Antes:${car2.finalPrice + car2.basePrice}!`);
console.log('Nuevo precio Chevrolet Corbina en oferta', car2.finalPrice, '¡Antes:', car2.finalPrice + car2.basePrice,'!')