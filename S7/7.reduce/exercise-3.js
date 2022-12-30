//Dado el siguiente array, haz la media de las notas de todos los examenes .reduce().

const exams = [
    {name: 'Abel Cabeza Román', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

//me servía para saber el número de objetos del array pero no hace falta
//porque en el último console.log(mediaScore/exams.length);
//ya me recorre todos y hace la media dividiendo
// console.log(exams.length);

const mediaScore = exams.reduce((acc, media) => acc + media.score /* /10*/, 0);
//console.log(mediaScore);
console.log(mediaScore/exams.length);
