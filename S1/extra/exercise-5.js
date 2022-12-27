//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos 
//y mostrar por consola la media de ventas.

//const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];


const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

//Si no supieramos la cantidad total de productos:
console.log('Número de elementos del array',products.length); //nos devuelve 4

let totalVentas = 0;
for (const product of products) {
    if(product.sellCount){
        totalVentas += product.sellCount / 4;  
    }
    
}
console.log('Media del total de ventas',totalVentas);



