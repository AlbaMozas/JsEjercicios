//Dado el siguiente javascript usa forof para recorrer el array de películas, 
//genera un nuevo array con las categorías de las películas 
//e imprime por consola el array de categorías. 
//Ten en cuenta que las categorías no deberían repetirse.
//Para filtrar las categorías puedes ayudarte de la función `.includes()`.


// const movies = [
//     {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
//     {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
//     {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
//     {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
// ]


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


let categories = [];

for (const movie of movies) {
    for(const categoria of movie.categories){
        if(!categories.includes(categoria)){
            categories.push(categoria);
        }
    }
}
console.log(categories);

//nuevo array de categories
// se hacen dos bucles porque uno recorre el array entero de movies y el segundo recorre todos los arrays,
//dentro de movies.categories. 
//!().includes categoria con .push para recorrerlo en el array de su clase