//En base al siguiente javascript, usa destructuring para crear las variables name 
//y itv con sus respectivos valores. Posteriormente crea 3 variables usando
// igualmente el destructuring para cada uno de los años y comprueba 
//que todo esta bien imprimiendolo.

//const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
}


//primera variable con las principales entre llaves
let {name, itv} = car;

let [primerAño, segundoAño, tercerAño] = itv;

console.log(`Resultado: nombre: ${name} | itv: ${primerAño}, ${segundoAño}, ${tercerAño}`);