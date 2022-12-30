//Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name
// y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

//const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];


let namesUsers = (user) => {
    if(user.name.includes('A')){
        user.name = 'Anacleto';
    }
    return user.name;
};

let newUsers = users.map(namesUsers);
console.log(newUsers);


//.map : crea un nuevo array con los resultados de la llamada a 
//la función indicada aplicados a cada uno de sus elementos.

