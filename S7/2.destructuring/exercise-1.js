//En base al siguiente javascript, 
//crea variables en base a las propiedades del objeto 
//usando object destructuring e imprimelas por consola. 
//Cuidado, no hace falta hacer destructuring del array, solo del objeto.


//const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}

//console.log(game); Muestra los datos pero también con los títulos
//con destructuring sólo se muestra la información

let destructuring = {
    title,
    gender,
    year,
  } = game;
  console.log(title, gender ,year);