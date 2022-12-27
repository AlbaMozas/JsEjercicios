//Dado el siguiente javascript, imprime con un ``console.log`` la suma del precio de ambos juguetes.

// const toy1 = {name: 'Buss myYear', price: 19};
// const toy2 = {name: 'Rallo mcKing', price: 29};


const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log('Precio Total;',toy1.price + toy2.price);

//Otra manera de hacerlo dentro de una sola variable nueva
let precio = {
    toy1Price: 19,
    toy2Price: 29,
}
console.log('Precio Total:', precio.toy1Price + precio.toy2Price);