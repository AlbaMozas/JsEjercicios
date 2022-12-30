//Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
//const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];

// 1-declaramos nueva variable
// 2 - El "valor" es igual a users.map
// 3 - (user) => es una función que también se puede hacer con function(user)
// 4 - {retornamos user.name} porque queremos la lista de nombres
//con user.id retorna el número

//opción con =>
const namesUsers = users.map((user) => {return user.name});
console.log(namesUsers);

//opción con function
let usersNames = users.map(function(user) {return user.name});
console.log(usersNames);