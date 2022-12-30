//Dado los siguientes objetos. 
//Crea un nuevo objeto fusionando los dos con spread operators.
//const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
//const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}


const toy = {
    name: 'Bus laiyiar', 
    date: '20-30-1995', 
    color: 'multicolor'
};

const toyUpdate = {
    lights: 'rgb', 
    power: ['Volar like a dragon', 'MoonWalk']}

//hacemos la copia entre llaves otra vez porque es un objeto y no array[]
const sumaToys = {...toy, ...toyUpdate};
console.log(sumaToys);