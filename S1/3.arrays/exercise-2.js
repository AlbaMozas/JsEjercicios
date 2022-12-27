//Cambia el primer elemento de cars a "Ford"

//const cars = ['Saab', 'Volvo', 'BMW'];


const cars = ['Saab', 'Volvo', 'BMW'];

cars[0] = 'Ford'
console.log('Sólo cambio:', cars);

//Otra forma de hacerlo eliminando el primero y después añadiendo en primer lugar//
const firstCar = cars.shift();
console.log('Quitando el primer elemento',cars); //primero eliminado
cars.unshift('Ford'); //Ford añadido en primer lugar
console.log('Para añadir el nuevo en primer lugar',cars);
