//Dado el siguiente objeto, crea una copia usando spread operators.
//const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};


const toy = {
    name: 'Bus laiyiar', 
    date: '20-30-1995', 
    color: 'multicolor'
};

// let newArray = {};
// newArray = {...toy};
// console.log(newArray);

//para que funcione hay que hacer las copias con llaves porque es un objeto
let copiaDeToy = {...toy};
console.log(copiaDeToy);
